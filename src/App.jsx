import React from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffer,
  Subscribe,
  Services,
  SuperQuality,
} from './Sections/sections.js';
import Nav from "./components/Nav/Nav.jsx";


function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality/>
      <Services/>
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
