import "./App.css";
import React from "react";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "./components/Fab";
import AddProduct from "./components/AddProduct";
import NavBarCommercant from "./components/NavBarCommercant/index";
import ProfilePage from "./components/ProfilePage";
import SignUp from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBarCommercant />
              <Products name="products"></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <>
              <NavBarCommercant />
              <AddProduct></AddProduct>
            </>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <>
              <NavBarCommercant />
              <Products name="order"></Products>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <NavBarCommercant />
              <SignUp />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <NavBarCommercant />
              <ProfilePage />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
