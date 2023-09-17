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
          <Route element={<News pageSize={3} apiKeyNew={"5ddcdb9b85b34239bdcbeef4fcf1d74a"}/>} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    );
  }
}
