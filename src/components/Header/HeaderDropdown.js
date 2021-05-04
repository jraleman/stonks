import React from 'react';
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import uniqueId from 'lodash.uniqueid';
import { navDropdownItems } from '../../utils/constants';

const ItemsList = ({ items }) => items.map(({ label, onClick }) => (
    <DropdownItem
        key={uniqueId('nav-dropdown-item_')}
        onClick={onClick}
    >
        {label}
    </DropdownItem>
));

const HeaderDropdown = ({ items = navDropdownItems }) => (
    <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Menu
            </DropdownToggle>
            <DropdownMenu right>
                <ItemsList items={items}/>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
);

export default HeaderDropdown;
