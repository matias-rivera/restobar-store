import styled from 'styled-components/macro'
import ImgNews from '../../images/news-medium.jpg'

export const NewsletterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    background: linear-gradient(to right, rgba(0,0,0,0.9), 
    rgba(0,0,0,0.5)), url(${ImgNews});
    height: 100vh;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    gap:1.5rem;
    
`;
export const Title = styled.h1``;
export const Subtitle = styled.h3`
    font-weight: 400;
`;
export const FormContainer = styled.div`
    background: white;
    height: 100%;
    width: 100%;
    display: flex;
    background: #150f0f;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2rem;
        gap:0;
    }

`;
export const Image = styled.img`
    width: 100%;
    max-width: 650px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow:1;
    gap: 0.5rem;
    
`;
export const FormTitle = styled.h2`
    font-weight: 400;
`;
export const FormSubtitle = styled.h4`
    font-weight: 400;
    color: #e9ba23;
`;
export const FormError = styled.h4``;
export const FormGroup = styled.div`
    width: 100%;
    padding: 0 2rem;
`;
export const FormLabel = styled.div`
    display: flex;
    align-self: flex-start;
`;
export const FormInput = styled.input`
    width: 100%;
`;
export const FormButton = styled.button`
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    padding: 0.5rem 2rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

`;