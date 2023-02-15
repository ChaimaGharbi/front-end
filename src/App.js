import "./App.css";
import React from "react";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "./Components/Fab/Fab";
import AddProduct from "./Components/AddProduct";
import NavBarCommercant from "./Components/NavBarCommercant/index";
import ProfilePage from "./Components/ProfilePage";
import SignUpPage from "./Components/SignUpPage";
import Favorites from './Components/Pages/Favorites';
import Orders from './Components/Pages/Orders';
import {LoginComponent} from './Components/Loginv2.0/LoginComponent';
import Profile from './Components/Profile/Profile';
import NavBarClient from './Components/NavBarClient';
import SignUpClient from './Components/SignUp/SignUp';
import ProductsClient from './Components/Pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="commerçant/products"
          element={
            <>
              <NavBarCommercant />
              <Products name="products"></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        <Route
          path="commerçant/products/addProduct"
          element={
            <>
              <NavBarCommercant />
              <AddProduct></AddProduct>
            </>
          }
        ></Route>
        <Route
          path="commerçant/orders"
          element={
            <>
              <NavBarCommercant />
              <Products name="order"></Products>
            </>
          }
        ></Route>
        <Route
          path="commerçant/signup"
          element={
            <>
              <NavBarCommercant />
              <SignUpPage />
            </>
          }
        ></Route>
        <Route
          path="commerçant/profile"
          element={
            <>
              <NavBarCommercant />
              <ProfilePage />
            </>
          }
        ></Route>
        <Route
          path='/'
          element={
            <>
              <LoginComponent></LoginComponent>
            </>
          }
        ></Route>
        <Route
          path='/signup'
          element={
            <>
              <SignUpClient></SignUpClient>
            </>
          }
        ></Route>
        <Route
          path='/profile'
          element={
            <>  
              <NavBarClient></NavBarClient>
              <Profile></Profile>
            </>
          }
        ></Route>
        <Route
          path='/favoris'
          element={
            <>
             <NavBarClient></NavBarClient>
              <Favorites></Favorites>
            </>
          }
        ></Route>
        <Route
          path='/commandes'
          element={
            <>
              <NavBarClient></NavBarClient>
              <Orders></Orders>
            </>
          }
        ></Route>
        <Route
          path='/products'
          element={
            <>
              <NavBarClient></NavBarClient>
              <ProductsClient></ProductsClient>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
