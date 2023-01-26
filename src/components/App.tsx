import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

interface Props {}

function App({}: Props) {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
}

export default App;
