import React from 'react';
import { Alert } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import StocksTable from './components/StocksTable';
import { useStocks } from './utils/hooks';

const App = () => {
    const [stocks, status] = useStocks();
    return (
        <>
            <Header />
            <Searchbar />
            {!status && <Alert color="warning">Offline</Alert>}
            <StocksTable stocks={stocks} />
            <Footer />
        </>
    );
}

export default App;
