import React from "react";
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
} from "./HeroElements";

const Hero = () => {
    return (
        <>
            <HeroContainer id="hero">
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Best Food ever</HeroH1>
                        <HeroP>Ready in 60 seconds</HeroP>
                        <HeroBtn to="/menu">Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default Hero;
