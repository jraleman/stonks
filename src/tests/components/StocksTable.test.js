import { render } from '@testing-library/react';
import StocksTable from '../../components/StocksTable';
import StockLogo from '../../components/StockLogo';
import TableHeaders from '../../components/StocksTable/TableHeaders';
import TableRows from '../../components/StocksTable/TableRows';

test('renders StocksTable component', () => {
    render(<StocksTable />);
});

test('renders StockLogo component', () => {
    render(<StockLogo />);
});

test('renders TableHeaders component', () => {
    render(<TableHeaders />);
});

test('renders TableRows component', () => {
    render(<TableRows />);
});
