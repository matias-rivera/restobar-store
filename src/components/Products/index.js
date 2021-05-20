import React, { useContext, useEffect } from "react";
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    GridContainer,
    AddButton,
    RemoveButton,
} from "./ProductsElements";
import { Context } from "../../context";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../context/cartConstants";

const Products = ({ heading, data }) => {
    return (
        <>
            <ProductsContainer id="products">
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product, index) => (
                        <Products.Card product={product} key={index} />
                    ))}
                </ProductWrapper>
            </ProductsContainer>
        </>
    );
};

Products.Card = function ProductsCard({ product }) {
    // state
    const {
        state: { cart },
        dispatch,
    } = useContext(Context);

    const addItem = () => {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: product.name,
                description: product.desc,
                price: product.price,
            },
        });
    };

    const removeItem = () => {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: product.name,
        });
    };

    const inCart = () => {
        return cart.find((item) => item.product === product.name);
    };

    return (
        <ProductCard>
            <ProductImg src={product.image} alt={product.alt} />
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                {inCart() ? (
                    <RemoveButton onClick={removeItem}>
                        Remove from Cart
                    </RemoveButton>
                ) : (
                    <AddButton onClick={addItem}>Add to Cart</AddButton>
                )}
            </ProductInfo>
        </ProductCard>
    );
};

Products.Grid = function ProductsGrid({ data }) {
    return (
        <GridContainer>
            {data.map((product, index) => (
                <Products.Card product={product} key={index} />
            ))}
        </GridContainer>
    );
};

export default Products;
