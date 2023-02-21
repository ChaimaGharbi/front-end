import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginCommercant from "./Components/commerçant/LoginCommerçant/LoginComponent";
import Products from "./Components/commerçant/Products/Products";
import OrdersCom from './Components/commerçant/Products/Orders';

import Fab from "./Components/commerçant/Fab/Fab";
import AddProduct from "./Components/commerçant/AddProduct";
import NavBarCommercant from "./Components/commerçant/NavBarCommercant/index";
import ProfilePage from "./Components/commerçant/ProfilePage";
import SignUpPage from "./Components/commerçant/SignUpPage";

import Favorites from "./Components/client/FavoritePage/Favorites";
import Orders from "./Components/client/OrderPage/Orders";
import { LoginComponent } from "./Components/client/LoginClient/LoginComponent";
import Profile from "./Components/client/ProfilePage/Profile";
import NavBarClient from "./Components/client/NavBarClient";
import SignUpClient from "./Components/client/SignUpPage/SignUp";
import ProductsClient from "./Components/client/ProductPage/Products";
import EditProduct from './Components/commerçant/EditProduct';

import Summary from "./Components/commerçant/Summary/Summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="commerçant" element={<LoginCommercant></LoginCommercant>}></Route>
        <Route
          path="commerçant/homepage"
          element={
            <>
              <NavBarCommercant />
              <Products></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        <Route
          path="commerçant/summary"
          element={
            <>
              <NavBarCommercant />
              <Summary/>
            </>
          }
        ></Route>
        <Route
          path="commerçant/addProduct"
          element={
            <>
              <NavBarCommercant />
              <AddProduct></AddProduct>
            </>
          }
        ></Route>
        <Route
          path="commerçant/commandes"
          element={
            <>
              <NavBarCommercant />
              <OrdersCom/>
            </>
          }
        ></Route>
        <Route
          path="commerçant/signup"
          element={
            <>
              <SignUpPage />
            </>
          }
        ></Route>
        <Route
          path='commerçant/editproduit'
          element={
            <>
              <NavBarCommercant />
              <EditProduct></EditProduct>
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
          path="/"
          element={
            <>
              <LoginComponent></LoginComponent>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <SignUpClient></SignUpClient>
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <NavBarClient></NavBarClient>
              <Profile></Profile>
            </>
          }
        ></Route>
        <Route
          path="/favoris"
          element={
            <>
              <NavBarClient></NavBarClient>
              <Favorites></Favorites>
            </>
          }
        ></Route>
        <Route
          path="/commandes"
          element={
            <>
              <NavBarClient></NavBarClient>
              <Orders></Orders>
            </>
          }
        ></Route>
        <Route
          path="/homepage"
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
