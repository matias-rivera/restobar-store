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



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Delivery />
      <Feature />
      <Products heading='Choose your favorite' data={productData} />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
