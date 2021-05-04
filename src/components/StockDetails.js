import React, { useContext } from 'react';
import { Alert } from 'reactstrap';
import isEmpty from 'lodash.isempty';
import uniqueId from 'lodash.uniqueid';
import styled from 'styled-components';
import { StocksStateContext } from '../context/stocks-context';
import { getAverageInfo } from '../utils/charts';
import { additionalInfo, averageInfoLabel } from '../utils/constants';
import { useLinearChart } from '../utils/hooks';

const Container = styled.div`
    padding: 1em;
`;

const StyledChart = styled.div`
    background: #121212;
    color: #f9f9f9;
`;

const StyledInfo = styled.div`
    line-height: 2;
    margin-left: 2em;
    font-weight: 500;
`;

const InfoContainer = styled.div`
    background: #f9f9f9;
    color: #121212;
    width: 100%;
`;

const AverageInfo = ({
    info = [],
    allowed = additionalInfo
}) => (
    <InfoContainer>
        <Alert color="info">{averageInfoLabel}</Alert>
        { allowed.map((a) => info[a] && (
            <StyledInfo key={uniqueId('average-info_')}>
                {`⇰ ${a} = ${info[a].toFixed(2)}`}
            </StyledInfo>
        ))}
        <hr />
    </InfoContainer>
);

const StockDetails = () => {
    const { symbol, stockData } = useContext(StocksStateContext);
    useLinearChart({ data: stockData });

    const avg = getAverageInfo(stockData);
    const isVisible = !(!symbol || isEmpty(stockData));
    return (
        <Container>
            <StyledChart id="chart" />
            {isVisible && <AverageInfo info={avg} />}
        </Container>
    );
};

export default StockDetails;
