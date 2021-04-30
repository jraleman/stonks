import React, { useContext } from 'react';
import isEmpty from 'lodash.isempty';
import { StocksStateContext } from '../context/stocks-context';

const StockDetails = () => {
    const { symbol, charts } = useContext(StocksStateContext);
    if (!symbol || isEmpty(charts)) {
        return null;
    }
    return (
        <div>
            {JSON.stringify(charts)}
        </div>
    );
};

export default StockDetails;
