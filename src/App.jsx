// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./static/Header";
import Footer from "./static/Footer";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import BusinessType from "./pages/BusinessType";
import Developers from "./pages/Developers";
import Company from "./pages/Company";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/BusinessType" element={<BusinessType />} />
          <Route path="/Developers" element={<Developers />} />
          <Route path="/Company" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
