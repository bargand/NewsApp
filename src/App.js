import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<News />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    );
  }
}
