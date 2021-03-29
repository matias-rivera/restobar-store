import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink 
                        to='delivery' 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                    >Delivery
                    </SidebarLink>
                    <SidebarLink 
                        to='products' 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        >
                    Products</SidebarLink>
                    <SidebarLink 
                        to='about' 
                        onClick={toggle} 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                    >About</SidebarLink>
                    <SidebarLink 
                        to='contact'
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                    >Contact</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
