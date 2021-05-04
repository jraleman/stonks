import * as d3 from 'd3';
import isEmpty from 'lodash.isempty';

// source: https://brendansudol.com/writing/responsive-d3
const responsivefy = (svg) => {
    if (!svg.node()) {
        return;
    }
    // get container + svg aspect ratio
    const container = d3.select(svg.node().parentNode);
    const width = parseInt(svg.style('width'));
    const height = parseInt(svg.style('height'));
    const aspect = width / height;

    // get width of container and resize svg to fit it
    const resize = () => {
        const targetWidth = parseInt(container.style('width'));
        svg.attr('width', targetWidth);
        svg.attr('height', Math.round(targetWidth / aspect));
    }

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr('viewBox', `0 0 ${width} ${height}`)
        .attr('perserveAspectRatio', 'xMinYMid')
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on(`resize.${container.attr('id')}`, resize);
};

const movingAverage = (data, numberOfPricePoints) =>
    data.map((row, index, total) => {
        const start = Math.max(0, index - numberOfPricePoints);
        const subset = total.slice(start, index + 1);
        const sum = subset.reduce((a, b) => a + b.close, 0);
        return ({
            date: new Date(row.date),
            average: sum / subset.length
        });
    });

const clearChart = (id) => {
    d3.select(id).select('svg').remove();
};

export const drawLinearChart = ({
    id = '',
    data = [{}],
    xAxis = '',
    yAxis = '',
    xConvert = (x) => x,
    yConvert = (y) => y,
    colors = {
        price: '#4682b4',
        average: '#ffa500',
        gain: '#03a678',
        lose: '#c0392b',
    }
}) => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = window.innerHeight - margin.top - margin.bottom;

    const xMin = d3.min(data, d => xConvert(d[xAxis]));
    const xMax = d3.max(data, d => xConvert(d[xAxis]));
    const yMin = d3.min(data, d => yConvert(d[yAxis]));
    const yMax = d3.max(data, d => yConvert(d[yAxis]));

    const xScale = d3
        .scaleTime()
        .domain([xMin, xMax])
        .range([0, width]);
    
    const yScale = d3
        .scaleLinear()
        .domain([yMin - 5, yMax])
        .range([height, 0]);
    
    const line = d3
        .line()
        .x(d => xScale(xConvert(d[xAxis])))
        .y(d => yScale(yConvert(d[yAxis])));
    
    const movingAverageData = movingAverage(data, 49);

    const movingAverageLine = d3
        .line()
        .x(d => xScale(xConvert(d[xAxis])))
        .y(d => yScale(yConvert(d.average)))
        .curve(d3.curveBasis);
    
    const volData = data.filter(d => d.volume);
    const yMinVolume = d3.min(volData, d => Math.min(d.volume));
    const yMaxVolume = d3.max(volData, d => Math.max(d.volume));
    const yVolumeScale = d3
        .scaleLinear()
        .domain([yMinVolume, yMaxVolume])
        .range([height, 0]);

    clearChart(id);

    // setup
    const svg = d3
        .select(id)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .call(responsivefy)
        .append('g')
        .attr('transform', `translate(${margin.left},  ${margin.top})`);
    // x axis
    svg
        .append('g')
        .attr('id', 'xAxis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));
    // y axis
    svg
        .append('g')
        .attr('id', 'yAxis')
        .attr('transform', `translate(${width}, 0)`)
        .call(d3.axisRight(yScale));
    // draw price line
    svg
        .append('path')
        .data([data])
        .style('fill', 'none')
        .attr('id', 'priceChart')
        .attr('stroke', colors.price)
        .attr('stroke-width', '1.5')
        .attr('d', line);
    // draw avg curve
    svg
        .append('path')
        .data([movingAverageData])
        .style('fill', 'none')
        .attr('id', 'movingAverageLine')
        .attr('stroke', colors.average)
        .attr('d', movingAverageLine);
    // draw volume bar
    svg
        .selectAll()
        .data(volData)
        .enter()
        .append('rect')
        .attr('x', d => xScale(xConvert(d[xAxis])))
        .attr('y', d => yVolumeScale(d.volume))
        .attr('fill', (d, i) =>
            (i && volData[i - 1].close > d.close ? colors.lose : colors.gain))
        .attr('width', 1)
        .attr('height', d => (height - yVolumeScale(d.volume)));
    
    return svg;
};

export const getAverageInfo = (stockData) => {
    if (isEmpty(stockData)) {
        return [{}];
    }
    return (
        Array.from(stockData.reduce(
            (acc, obj) => Object.keys(obj).reduce( 
                (acc, key) => typeof obj[key] == "number"
                    ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
                    : acc,
            acc),
            new Map()
        )).reduce(
            (acc, [name, values]) =>
                Object.assign(acc, { [name]: values.reduce((a,b) => a + b) / values.length }),
            {}
    ));
};
