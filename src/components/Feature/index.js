import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
    return (
        <>
            <FeatureContainer id="menu">
                <h1>Discover all our dishes</h1>
                <p>Red Shark Restobar</p>
                <FeatureButton to="/menu">Full Menu</FeatureButton>
            </FeatureContainer>
        </>
    );
};

export default Feature;
