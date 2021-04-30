import React from 'react';
import StocksProvider from './stocks-context';
import ThemeProvider from './theme-context';

const Providers = ({ children }) => (
    <ThemeProvider>
        <StocksProvider>
            {children}
        </StocksProvider>
    </ThemeProvider>
);

export default Providers;
