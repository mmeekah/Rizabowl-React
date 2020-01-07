import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/Blog";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/blog/" component={Blog} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/products/:slug" component={SingleProduct} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
