import { render } from '@testing-library/react';
import StockDetails from '../../components/StockDetails';
import AverageInfo from '../../components/StockDetails/AverageInfo';
import StocksProvider from '../../context/stocks-context';
import { additionalInfo, averageInfoLabel } from '../../utils/constants';
import { getAverageInfo } from '../../utils/charts';
import stockData from '../../__mocks__/data/stockData';

const ctxRender = (ui, { providerProps = {}, ...renderOptions }) =>
    render(
        <StocksProvider {...providerProps}>
            {ui}
        </StocksProvider>,
        renderOptions
    );

describe('StockDetails', () => {
    it('should render', () => {
        const providerProps = {
            symbol: '',
            stockData: [{}]
        };
        ctxRender(<StockDetails />, { providerProps });
    });

    it('uses stock data', () => {
        const providerProps = {
            symbol: 'NKE',
            stockData
        };
        ctxRender(<StockDetails />, { providerProps });
    });
});

describe('AverageInfo', () => {
    it('should render', () => {
        render(<AverageInfo />);
    });

    it('uses stock data', () => {
        const avg = getAverageInfo(stockData);
        render(<AverageInfo info={avg} allowed={additionalInfo} />);
    });

    it('checks for label', () => {
        const { getByText } = render(<AverageInfo />);
        expect(getByText(averageInfoLabel)).toBeDefined();
    });
});
