import { useReducer, createContext, useEffect } from "react";
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_RESET_ITEMS,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
} from "./cartConstants";

const initialState = {
    cart: [],
};

const Context = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cart.find(
                (x) => x.product === item.product
            );

            if (existItem) {
                return {
                    ...state,
                    cart: state.cart.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter((x) => x.product !== action.payload),
            };
        case CART_RESET_ITEMS:
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
