import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import styled from 'styled-components';
import { searchbarPlaceholder, searchbarLabel } from '../utils/constants';

const StyledGroup = styled(InputGroup)`
    width: 80%;
    margin: 0 auto;
    padding: 1em;
`;

const Searchbar = ({
    onChange,
    value,
    placeholder = searchbarPlaceholder,
    label = searchbarLabel
}) => {
    const [input, setInput] = useState('');

    const handleSearch = ({ target: { value: v }}) => {
        setInput(v);
    };

    return (
        <StyledGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>{label}</InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder={placeholder}
                onChange={onChange || handleSearch}
                value={value || input}
            />
        </StyledGroup>
    );
};

export default Searchbar;
