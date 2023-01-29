import "./App.css";
import React from "react";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "./components/Fab";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products></Products>
              <Fab></Fab>
            </>
          }
        ></Route>
        <Route
          path="/Hello"
          element={
            <div>
              <h1>Hello World!</h1>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
