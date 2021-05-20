import React, { useState } from "react";

import About from "../components/About";
import Delivery from "../components/Delivery";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

import { productData } from "../components/Products/data";
import Sidebar from "../components/Sidebar";

const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Hero />
                <Delivery />
                <Products heading="Choose your favorite" data={productData} />
                <About />
                <Newsletter />
                <Feature />
            </div>
        </>
    );
};

export default MainScreen;
