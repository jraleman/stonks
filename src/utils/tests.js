import { render } from '@testing-library/react';
import StocksProvider from '../context/stocks-context';

export const stocksCtxRender = (ui, { initialState = {}, ...renderOptions }) =>
    render(
        <StocksProvider {...initialState}>
            {ui}
        </StocksProvider>,
        renderOptions
    );
