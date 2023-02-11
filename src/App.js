import "./App.css";
import React from "react";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "./Components/Fab/Fab";
import AddProduct from "./Components/AddProduct";
import NavBarCommercant from "./Components/NavBarCommercant/index";
import ProfilePage from "./Components/ProfilePage";
import SignUp from "./Components/SignUpPage";
import Favorites from './Pages/Favorites';
import Orders from './Pages/Orders';

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
              <SignUp />
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
            <></>
          }
        ></Route>
        <Route
          path='/signup'
          element={
            <></>
          }
        ></Route>
        <Route
          path='/profile'
          element={
            <></>
          }
        ></Route>
        <Route
          path='/favoris'
          element={
            <>
              <Favorites></Favorites>
            </>
          }
        ></Route>
        <Route
          path='/commandes'
          element={
            <>
              <Orders></Orders>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
