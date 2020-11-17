import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pricing from "./components/HomePage/Header/Navbar/Pricing";
import Header from "./components/HomePage/Header/Header";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
