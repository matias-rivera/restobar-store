import styled from "styled-components/macro";

export const ProductsContainer = styled.div`
    /*  width: 100vw; */
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #ffff;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    margin: 0 auto;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2rem 0;
    gap: 2rem;
    background: #150f0f;
    color: #ffff;
    justify-items: center;
    @media (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1100px) {
        gap: 1rem;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 470px) {
        grid-template-columns: 1fr;
    }
`;

export const ProductCard = styled.div`
    line-height: 2;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px) {
        width: 200px;
    }
`;

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
    margin-bottom: 0.5rem;
    @media (max-width: 1100px) {
        height: 150px;
        min-width: 150px;
    }
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    @media (max-width: 1100px) {
        font-size: 1.2rem;
    }
    @media (max-width: 470px) {
        font-size: 1.5rem;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    text-align: center;
    @media (max-width: 1100px) {
        padding: 0;
    }
`;

export const ProductDesc = styled.p`
    @media (max-width: 470px) {
        display: none;
    }
`;

export const ProductPrice = styled.p`
    font-size: 2rem;
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 2rem;
    border: none;
    transition: 0.2 ease-out;
    @media (max-width: 1100px) {
        padding: 0.5rem 2rem;
    }

    &:hover {
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;

export const AddButton = styled(ProductButton)`
    background: #38af48;
    color: #fff;

    &:hover {
        background: #ffc501;
        color: #000;
    }
`;

export const RemoveButton = styled(ProductButton)`
    background: #e1111a;
    color: #fff;

    &:hover {
        background: #ffc501;
        color: #000;
    }
`;
