import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { Table } from 'reactstrap';
import pick from 'lodash.pick';
import { tableColumns, basicInfo } from '../../utils/constants';
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
    return (
        <Table dark {...getTableProps()}>
            <thead>
                <tr>
                    <TableHeaders headers={headers} />
                </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
                <TableRows rows={rows} prepareRow={prepareRow} />
            </tbody>
        </Table>
    );
};

export default StocksTable;
