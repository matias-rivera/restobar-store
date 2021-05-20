import React, { useContext } from "react";
import { CartBtn, CartIcon, CartCirle, CartItems } from "./CartElements";
import { Context } from "../../context";

export const Cart = () => {
    return <>Hola</>;
};

export const CartButton = function CartButton({}) {
    const {
        state: { cart },
    } = useContext(Context);

    return (
        <CartBtn to="/menu">
            <CartIcon></CartIcon>
            {cart && cart.length > 0 && (
                <CartCirle>
                    <CartItems>{cart.length}</CartItems>
                </CartCirle>
            )}
        </CartBtn>
    );
};
