import React from 'react';
import styled from 'styled-components';
import { footerLabel } from '../utils/constants';

const StyledFooter = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    text-align: center;
    padding: 1em;
    background-color: #f8f9fa;
`;

const Footer = ({ label = footerLabel }) => (
    <StyledFooter>
        {label}
    </StyledFooter>
);

export default Footer;
