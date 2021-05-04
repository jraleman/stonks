import { render } from '@testing-library/react';
import StockDetails from '../../components/StockDetails';
import AverageInfo from '../../components/StockDetails/AverageInfo';
import { additionalInfo, averageInfoLabel } from '../../utils/constants';
import { getAverageInfo } from '../../utils/charts';
import stockData from '../../__mocks__/data/stockData';
import { stocksCtxRender } from '../../utils/tests';

describe('StockDetails', () => {
    it('should render', () => {
        const initialState = {
            symbol: '',
            stockData: [{}]
        };
        const component = stocksCtxRender(<StockDetails />, { initialState });
        expect(component).toMatchSnapshot();
    });

    it('uses stock data', () => {
        const initialState = {
            symbol: 'NKE',
            stockData
        };
        const component = stocksCtxRender(<StockDetails />, { initialState });
        expect(component).toMatchSnapshot();
    });
});

describe('AverageInfo', () => {
    it('should render', () => {
        const component = render(<AverageInfo />);
        expect(component).toMatchSnapshot();
    });

    it('uses stock data', () => {
        const avg = getAverageInfo(stockData);
        const component = render(<AverageInfo info={avg} allowed={additionalInfo} />);
        expect(component).toMatchSnapshot();
    });

    it('checks for label', () => {
        const { getByText } = render(<AverageInfo />);
        expect(getByText(averageInfoLabel)).toBeDefined();
    });
});
