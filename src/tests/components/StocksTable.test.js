import { render } from '@testing-library/react';
import StocksTable from '../../components/StocksTable';
import TableHeaders from '../../components/StocksTable/TableHeaders';
import TableRows from '../../components/StocksTable/TableRows';
import StockLogo from '../../components/StocksTable/StockLogo';
import { stocksCtxRender } from '../../utils/tests';

describe('StocksTable', () => {
    it('should render', () => {
        const stocks = [];
        const initialState = {
            symbol: '',
            stockData: [{}]
        };
        const component = stocksCtxRender(<StocksTable stocks={stocks} />, { initialState });
        expect(component).toMatchSnapshot();
    });
});

describe('StockLogo', () => {
    it('should render', () => {
        const src = '';
        const component = render(<StockLogo src={src} />);
        expect(component).toMatchSnapshot();
    });

    it('uses a source uri', () => {
        const src = 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.jpg';
        const component = render(<StockLogo src={src} />);
        expect(component).toMatchSnapshot();
    });
});

describe('TableHeaders', () => {
    it('should render', () => {
        const headers = [];
        const component = render(<TableHeaders headers={headers} />);
        expect(component).toMatchSnapshot();
    });
});

describe('TableRows', () => {
    it('should render', () => {
        const rows = [];
        const prepareRow = () => { };
        const onClick = () => { };
        const component = render(
            <TableRows
                rows={rows}
                prepareRow={prepareRow}
                onClick={onClick}
            />
        );
        expect(component).toMatchSnapshot();
    });
});

