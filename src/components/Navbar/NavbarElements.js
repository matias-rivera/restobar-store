import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'linear-gradient(180deg, rgba(0,0,0,0.7455182756696428) 0%, rgba(22,18,18,1) 63%)' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    margin-top: -80px;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 90vw;
`

export const Logo = styled.img`
    max-width: 50px;
   
`;

export const NavLink = styled(LinkScroll)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;



export const MobileIcon = styled.div`
    display:none;

     @media screen and (max-width: 768px){
         display: block;
         position: absolute;
         top: 1rem;
         right: 1rem;

         font-size: 1.8rem;
         cursor: pointer;
         color: #fff;
     }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: --22px;

     @media screen and (max-width: 768px){
         display:none;
     }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

     &.active {
         border-bottom: 3px solid #e31837;;
     };

     &:hover {
         color: #e31837;;
     }
 `

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;

     @media screen and (max-width: 768px) {
         display: none;
     }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #e31837;;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

     &:hover {
         transition: all 0.2s ease-in-out;
         background: #fff;
         color: #010606;
     }
`