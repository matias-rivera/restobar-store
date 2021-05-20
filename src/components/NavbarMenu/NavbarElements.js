import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    background: black;
    position: sticky;
    top: 0;
    height: 80px;
    z-index: 12;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 90vw;
`;

export const Logo = styled.img`
    max-width: 50px;
`;

export const NavLink = styled(Link)`
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
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;

        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: --22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #e31837;
    }

    &:hover {
        color: #e31837;
    }
`;
