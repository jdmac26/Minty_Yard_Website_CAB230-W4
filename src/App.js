import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* the content */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/book">
            <Book />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
