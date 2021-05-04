import React, { useContext } from 'react';
import isEmpty from 'lodash.isempty';
import styled from 'styled-components';
import { StocksStateContext } from '../../context/stocks-context';
import { getAverageInfo } from '../../utils/charts';
import { useLinearChart } from '../../utils/hooks';
import AverageInfo from './AverageInfo';

const Container = styled.div`
    padding: 1em;
`;

// get from theme context
const StyledChart = styled.div`
    background: #121212;
    color: #f9f9f9;
`;

const StockDetails = () => {
    const { symbol, stockData } = useContext(StocksStateContext);
    useLinearChart({ data: stockData });

    const avg = getAverageInfo(stockData);
    if (!symbol || isEmpty(stockData)) {
        return null;
    }
    return (
        <Container>
            <StyledChart id="chart" />
            <AverageInfo info={avg} />
        </Container>
    );
};

export default StockDetails;
