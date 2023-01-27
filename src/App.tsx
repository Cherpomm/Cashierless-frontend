import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import HomeFooter from "./components/Footer";
import HomeNavbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/Product" element={<Product />} />
      <Route path="/ContactUs" element={<ContactUs />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
