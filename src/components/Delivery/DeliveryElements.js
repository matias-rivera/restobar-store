import styled from 'styled-components/macro'
import { FaTruck, FaPizzaSlice, FaEdit } from 'react-icons/fa'

export const DeliveryContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1100px) / 2);
    background: #150f0f;
    color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DeliveryH1 = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;
export const DeliveryP = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;

`;
export const DeliveryProcess = styled.div`
    display:flex;
    justify-content: center;
    margin: 0 auto;
    gap: 5rem;
    padding: 2rem 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
`;
export const Item = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;
export const Edit = styled(FaEdit)`
    font-size: 8rem;
`;
export const Truck = styled(FaTruck)`
    font-size: 8rem;
`;
export const PizzaSlice = styled(FaPizzaSlice)`
    font-size: 8rem;
`;

export const ItemH2 = styled.h2``;
export const ItemP = styled.p``;
export const DeliveryButton = styled.button`
    display:flex;
    justify-self: center;
    margin-top: 2rem;
    font-size:  1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;
