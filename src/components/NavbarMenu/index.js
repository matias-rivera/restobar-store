import React, { useContext } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import ImgLogo from "../../images/logo.png";
import { Context } from "../../context";
import {
    Nav,
    NavbarContainer,
    NavLink,
    Logo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    CartBtn,
} from "./NavbarElements";

import { CartButton } from "../Cart";
const NavbarMenu = ({ toggle }) => {
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLink to="/">
                            <Logo src={ImgLogo} alt={"logo"} />
                            <h6>Red Shark</h6>
                        </NavLink>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/menu">Menu</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/cart">Cart</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <CartButton />
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavbarMenu;
