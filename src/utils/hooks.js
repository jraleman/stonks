import { useState, useEffect, useMemo } from 'react';
import { getQuotesForStock, getLogoForStock, getStatus } from './requests';
import { stocksList } from './constants';
import { chartId, xAxisChart, yAxisChart } from './constants';
import { drawLinearChart } from './charts';

// Returns stocks data, and status of server
export const useStocks = () => {
    const [status, setStatus] = useState(false);
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const s = getStatus();
        setStatus(s);
    }, [setStatus]);

    useEffect(() => {
        const fetchQuote = async ({ symbol }) => {
            const { data: stock } = await getQuotesForStock({ symbol });
            const { data: { url: logo }} = await getLogoForStock({ symbol });
            const item = { ...stock, logo };
            setStocks((s) => [...s, item])
        };
        const populateStocks = async () => {
            for (let i = 0; i < stocksList.length; i += 1) {
                fetchQuote({ symbol: stocksList[i] });
            }
        }
        if (status) {
            populateStocks();
        }
    }, [status]);

    return [stocks, status];
};

// Returns svg chart obj
export const useLinearChart = ({
    data,
    xAxis = xAxisChart,
    yAxis = yAxisChart,
    id = chartId,
}) => {
    const chart = useMemo(() => {
        const svg = drawLinearChart({
            id,
            data,
            xAxis,
            yAxis,
            xConvert: (x) => new Date(x),
        });
        return svg;
    }, [data, id, xAxis, yAxis]);

    return [chart];
};
