import React, { useState } from "react";
import Products from "../Products";
import { productData } from "../Products/data";

const FullMenu = () => {
    const [products, setProducts] = useState(productData);

    return <Products.Grid data={products} />;
};

export default FullMenu;
