import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Cart from "./pages/cart";

const App = () => {
  return (
    <BrowserRouter>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/signin" element={<Login />} />
        <Route path="/user/signup" element={<Register />} />
        <Route path="/shopping" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
