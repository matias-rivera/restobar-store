import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const CartBtn = styled(Link)`
    border-radius: 50%;
    background: #e31837;
    white-space: nowrap;
    width: 2.5rem;
    height: 2.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 1rem;
        right: 4rem;
    }
`;

export const CartIcon = styled(FaShoppingCart)`
    font-size: 1.4rem;
    ${CartBtn}:hover & {
        color: #e31837 !important;
    }
`;

export const CartCirle = styled.div`
    background: #51a1ff;
    z-index: 100;
    position: absolute;
    top: -0.3rem;
    right: -0.3rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartItems = styled.p`
    color: #ffffff;
`;
