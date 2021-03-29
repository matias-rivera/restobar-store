import React from 'react'
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
    ProductButton
} from './ProductsElements'

const Products = ({heading, data}) => {
    return (
        <>
            <ProductsContainer id='products'>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product, index) => (
                        <ProductCard key={index}>
                            <ProductImg src={product.image} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    ))}
                </ProductWrapper>
            </ProductsContainer>
        </>
    )
}

export default Products
