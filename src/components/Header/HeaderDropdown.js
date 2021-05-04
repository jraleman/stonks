import React from 'react';
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import uniqueId from 'lodash.uniqueid';
import { navDropdownItems, navMenuLabel } from '../../utils/constants';

const ItemsList = ({ items }) => items.map(({ label, onClick }) => (
    <DropdownItem
        key={uniqueId('nav-dropdown-item_')}
        onClick={onClick}
    >
        {label}
    </DropdownItem>
));

const HeaderDropdown = ({ items = navDropdownItems, label = navMenuLabel }) => (
    <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {label}
            </DropdownToggle>
            <DropdownMenu right>
                <ItemsList items={items}/>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
);

export default HeaderDropdown;
