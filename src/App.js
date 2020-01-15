import React, { Component } from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/blog/" component={Blog} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/products/:slug" component={SingleProduct} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
