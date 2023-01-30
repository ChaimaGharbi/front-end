<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> 723febf7707b5f54c6f4b2f5b00596b40459d37b
  );
}

export default App;
