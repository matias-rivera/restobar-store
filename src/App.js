import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Delivery from './components/Delivery';
import About from './components/About';
import Newsletter from './components/Newsletter';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Delivery />
      <Products heading='Choose your favorite' data={productData} />
      <About />
      <Newsletter />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
