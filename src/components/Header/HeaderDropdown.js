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

const ItemsList = () => navDropdownItems.map(({ label, onClick }) => (
    <DropdownItem
        key={uniqueId('nav-dropdown-item_')}
        onClick={onClick}
    >
        {label}
    </DropdownItem>
));

const HeaderDropdown = () => (
    <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Menu
            </DropdownToggle>
            <DropdownMenu right>
                <ItemsList />
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
);

export default HeaderDropdown;
