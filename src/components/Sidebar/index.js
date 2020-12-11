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
                    <SidebarLink to='/'>Pizzas</SidebarLink>
                    <SidebarLink to='/'>Hamburguers</SidebarLink>
                    <SidebarLink to='/'>Full Menu</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
