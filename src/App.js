import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize= 6
  apiKeyNew= "62f24983ca684d74813fb3d78c813be2"
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            element={
              <News
                key="general"
                country={"in"}
                pageSize={this.pageSize}
                category={"general"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/"
          />
          <Route
            exact
            element={
              <News
                key="business"
                country={"in"}
                pageSize={this.pageSize}
                category={"business"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/business"
          />
          <Route
            exact
            element={
              <News
                key="entertainment"
                country={"in"}
                pageSize={this.pageSize}
                category={"entertainment"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/entertainment"
          />
          <Route
            exact
            element={
              <News
                key="general"
                country={"in"}
                pageSize={this.pageSize}
                category={"general"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/general"
          />
          <Route
            exact
            element={
              <News
                key="health"
                country={"in"}
                pageSize={this.pageSize}
                category={"health"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/health"
          />
          <Route
            exact
            element={
              <News
                key="science"
                country={"in"}
                pageSize={this.pageSize}
                category={"science"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/science"
          />
          <Route
            exact
            element={
              <News
                key="sports"
                country={"in"}
                pageSize={this.pageSize}
                category={"sports"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/sports"
          />
          <Route
            exact
            element={
              <News
                key="technology"
                country={"in"}
                pageSize={this.pageSize}
                category={"technology"}
                apiKeyNew={this.apiKeyNew}
              />
            }
            path="/technology"
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
