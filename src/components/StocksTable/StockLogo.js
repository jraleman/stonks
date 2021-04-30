import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    height: 50px;
    width: auto;
`;

const StockLogo = ({ src }) => (
    <StyledImage src={src} />
);

export default StockLogo;
