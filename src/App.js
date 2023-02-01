import "./App.css";
import React from "react";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "./components/Fab";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products name="products"></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/orders" element={<Products name="order"></Products>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
