// import React from 'react';
// import Link from 'next/link';

// class Header extends React.Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <Link href="/">
//                     <a> Home </a>
//                 </Link>
//                 <Link href="/about">
//                     <a> About </a>
//                 </Link>
//                 <Link href="/portfolios">
//                     <a> Portfolios </a>
//                 </Link>
//                 <Link href="/blogs">
//                     <a> Blogs </a>
//                 </Link>
//                 <Link href="/cv">
//                     <a> Cv </a>
//                 </Link>
//             </React.Fragment>
//         )
//     }
// }

// export default Header;


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

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const navlinkContainer = {
        fontWeight:'bold',
        fontSize:"18px",
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
                            <NavLink  href="/portfolios">Portfolios</NavLink>
                        </NavItem>
                        <NavItem style={navlinkContainer}>
                            <NavLink href="https://github.com/geethaVani16">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;