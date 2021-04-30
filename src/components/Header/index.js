import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import { appTitle } from '../../utils/constants';
import HeaderTabs from './HeaderTabs';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{appTitle}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <HeaderTabs />
                    <HeaderDropdown />
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
