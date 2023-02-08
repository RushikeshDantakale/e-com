import "../index.css";
import React from "react";
import Home from "../pages/Home"
import CategoryProduct from "../pages/CategoryProduct";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "../store/store";

import Signup from "./Signup";
import Signin from "./Signin";
import Wishlist from "./Wishlist";





function App() {
  return (
    <div >
    
  
<Provider store={store}>
<BrowserRouter> 

 <Routes>
 
 
{/* <Route exact path='/category/viewproduct' element={<PurchasedProduct/>}/> */}
<Route exact path="/product"  element={<ProductPage/>} />
<Route exact path="/"  element={<Home/>} />
<Route exact path="/category"  element={<CategoryProduct/>} />
<Route exact path="/cart"  element={<CartPage/>} />
<Route exact path="/signup" element={<Signup/>} />
<Route exact path="/signin" element={<Signin/>} />
<Route exact path="/wishlist" element={<Wishlist/>} />

  </Routes>
  </BrowserRouter>
</Provider>
     
      
    </div>
  );
}

export default App;
