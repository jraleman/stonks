import React from 'react';
import { Alert } from 'reactstrap';
import uniqueId from 'lodash.uniqueid';
import styled from 'styled-components';
import { additionalInfo, averageInfoLabel } from '../../utils/constants';

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

export default AverageInfo;
