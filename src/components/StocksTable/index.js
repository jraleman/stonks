import React, { useMemo, useContext } from 'react';
import { useTable } from 'react-table';
import { Table } from 'reactstrap';
import pick from 'lodash.pick';
import { tableColumns, basicInfo } from '../../utils/constants';
import { StocksDispatchContext, StocksStateContext } from '../../context/stocks-context';
import { getChartForStock } from '../../utils/requests';
import TableHeaders from './TableHeaders';
import TableRows from './TableRows';

const StocksTable = ({ stocks }) => {
    const data = useMemo(() => stocks.map((d) => pick(d, basicInfo)));
    const columns = useMemo(() => tableColumns);
    const {
        getTableProps,
        getTableBodyProps,
        rows,
        headers,
        prepareRow,
    } = useTable({
        columns,
        data
    });
    const dispatch = useContext(StocksDispatchContext);
    const { symbol: contextSymbol } = useContext(StocksStateContext);

    const loadChart = async (symbol) => {
        // TODO: user can change range
        const range = '';
        const res = await getChartForStock({ symbol, range });
        const { data: charts } = res || {};
        dispatch({ type: 'LOAD_STOCK', payload: { symbol, charts } });
    }

    const handleOnClick = (row) => {
        const { symbol } = row || {};
        if (contextSymbol === symbol) {
            dispatch({ type: 'RESET_CONTEXT' });
        } else {
            loadChart(symbol);
        }
    };

    return (
        <Table dark {...getTableProps()}>
            <thead>
                <tr>
                    <TableHeaders headers={headers} />
                </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
                <TableRows
                    rows={rows}
                    prepareRow={prepareRow}
                    onClick={handleOnClick}
                />
            </tbody>
        </Table>
    );
};

export default StocksTable;
