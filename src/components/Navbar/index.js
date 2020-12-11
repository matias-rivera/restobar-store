import React from 'react'
import { Nav, NavLink, NavIcon, Bars, Logo } from './NavbarElements'
import ImgLogo from '../../images/logo.png'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <Logo src={ImgLogo} alt={'logo'}/>
                    Red Shark
                </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
