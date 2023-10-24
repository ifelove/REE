import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDisplay from "./pages/products/ProductDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/products/SingleProduct";
import PostReview from "./pages/PostReview";
import UserFeature from "./components/UserFeature";
import Admin from "./pages/adminPanel/Admin";
import Stat from "./pages/adminPanel/adminPages/Stat";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" Component={Login}></Route>

          <Route
            path="/products/:selectedCategory"
            Component={ProductDisplay}
          ></Route>
          <Route
            path="/products/:selectedCategory/:product/:id"
            Component={SingleProduct}
          ></Route>
          <Route path="/products/feedback/:id" Component={PostReview}></Route>
          <Route path="/" Component={Home}></Route>
          {/*
           
        
          <Route path="/admin" Component={Admin}></Route>
       
         
       

         
             * */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
