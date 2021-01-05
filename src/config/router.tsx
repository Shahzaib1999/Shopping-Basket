import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarCom from "../components/Navbar/Navbar";

import Home from "../views/Home/Home";
import Cart from "../views/Cart/Cart";

const Router = () => (
  <BrowserRouter>
    <NavbarCom />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
