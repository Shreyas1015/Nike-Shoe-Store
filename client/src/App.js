import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoesStore from "./Pages/ShoesStore";
import HoodiesSweatshirts from "./Pages/HoodiesSweatshirts";
import SNKR from "./Pages/SNKR";
import Football from "./Pages/Football";
import AccEquip from "./Pages/AccEquip";
import TrousersTights from "./Pages/TrousersTights";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import AllProducts from "./Pages/AllProducts";
import Kids from "./Pages/Kids";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SuccessPage from "./Pages/SuccessPage";
import CancelPage from "./Pages/CancelPage";
import Men from "./Pages/Men";
import Women from "./Pages/Women";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shoeStore" element={<ShoesStore />} />
          <Route path="/hoodiesSweatshirts" element={<HoodiesSweatshirts />} />
          <Route path="/snkr" element={<SNKR />} />
          <Route path="/footballShoes" element={<Football />} />
          <Route path="/acc" element={<AccEquip />} />
          <Route path="/trouserTights" element={<TrousersTights />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route
            path="/products/:productName/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
