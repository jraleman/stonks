import { render } from '@testing-library/react';
import StocksTable from '../../components/StocksTable';
import StockLogo from '../../components/StockLogo';

test('renders StocksTable component', () => {
    render(<StocksTable />);
});

test('renders StockLogo component', () => {
    render(<StockLogo />);
});
