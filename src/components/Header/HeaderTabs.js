import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import uniqueId from 'lodash.uniqueid';
import { navTabs } from '../../utils/constants';

const TabsList = () => navTabs.map(({ title, href }) => (
    <NavItem key={uniqueId('nav-tab_')}>
        <NavLink href={href}>{title}</NavLink>
    </NavItem>
));

const HeaderTabs = () => (
    <Nav className="mr-auto" navbar>
        <TabsList />
    </Nav>
);

export default HeaderTabs;
