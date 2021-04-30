import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
    cursor: pointer;
`;

const TableRows = ({ rows, prepareRow, onClick }) => rows.map((row) => {
    const handleOnClick = () => onClick(row.original);
    
    prepareRow(row);
    return (
        <StyledRow {...row.getRowProps()} onClick={handleOnClick}>
            {row.cells.map(cell => (
                <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                </td>
            ))}
        </StyledRow>
    );
});

export default TableRows;
