import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    text-align: center;
    padding: 1em;
    background-color: #f8f9fa;
`;

const Footer = () => (
    <StyledFooter>
        © 2021
    </StyledFooter>
);

export default Footer;
