import React from 'react';

const TableRows = ({ rows, prepareRow }) => rows.map((row) => {
    prepareRow(row);
    const handleOnClick = (row) => {
        const { symbol } = row || {};
        console.log(symbol);
    };
    return (
        <tr {...row.getRowProps()} onClick={() => handleOnClick(row.original)}>
            {row.cells.map(cell => (
                <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                </td>
            ))}
        </tr>
    );
});

export default TableRows;
