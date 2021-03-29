import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import ImgLogo from '../../images/logo.png'
import { 
    Nav, 
    NavbarContainer, 
    NavLink, 
    Logo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLink
                            to='hero' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                        >
                            <Logo src={ImgLogo} alt={'logo'}/>
                            <h6>Red Shark</h6>
                        </NavLink>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks  
                                    to='delivery' 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                >Delivery</NavLinks>  
                            </NavItem>
                            <NavItem>
                                <NavLinks  
                                    to='products'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                >Products</NavLinks>  
                            </NavItem>
                            <NavItem>
                                <NavLinks  
                                    to='about'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                >About</NavLinks>  
                            </NavItem>
                            <NavItem>
                                <NavLinks  
                                    to='contact'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true'  
                                >Contact</NavLinks>  
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/'>Order</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
