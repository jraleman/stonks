import React from 'react';

const TableHeaders = ({ headers }) => headers.map(column => (
    <th {...column.getHeaderProps()}>
        {column.render('Header')}
    </th>
));

export default TableHeaders;
