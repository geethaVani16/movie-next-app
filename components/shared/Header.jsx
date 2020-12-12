import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


const LoginLink = () =>
  <span className="nav-link port-navbar-link clickable">Login</span>

const LogoutLink = () =>
  <span className="nav-link port-navbar-link clickable">Logout</span>

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const navlinkContainer = {
        fontWeight: 'bold',
        fontSize: "18px",
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" style={navlinkContainer}  >Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="/about/" >About</NavLink>
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="/blogs/">Blogs</NavLink>
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="/cv/">Cv</NavLink>
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="/portfolios">Portfolios</NavLink>
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="https://github.com/geethaVani16">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem style={navlinkContainer}>
                            <LoginLink />
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <LogoutLink />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;