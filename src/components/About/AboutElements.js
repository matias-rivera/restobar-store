import styled from 'styled-components/macro'

export const AboutContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1100px) / 2);
    background: #150f0f;
    color: #ffff;
    display:flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
`;
export const Image = styled.img`
    padding: 0 1rem;
    max-height: 40rem;
`;
export const TextContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;

    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 2rem;
        gap:0;
    }
    
`;
export const TextSub = styled.h3``;
export const TextH1 = styled.h1`
    font-size: clamp(2rem, 3vw, 3rem);
`;
export const TextQuote = styled.p`
    font-size: clamp(1rem, 1vw, 2rem);
`;
export const TextDescription = styled.p`
    margin-bottom: 1rem;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
`;