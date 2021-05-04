import React from 'react';
import { Alert } from 'reactstrap';
import Providers from './context/Providers';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import StocksTable from './components/StocksTable';
import StockDetails from './components/StockDetails';
import { useStocks } from './utils/hooks';
import { failedStatusLabel } from './utils/constants';

const App = () => {
    const [stocks, status] = useStocks();
    return (
        <Providers>
            <Header />
            <Searchbar />
            {!status && <Alert color="warning">{failedStatusLabel}</Alert>}
            <StockDetails />
            <StocksTable stocks={stocks} />
            <Footer />
        </Providers>
    );
};

export default App;
