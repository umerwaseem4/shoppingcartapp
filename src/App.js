import React from "react";
import "./main.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import DisplayItem from "./Components/DisplayItem";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/display" component={DisplayItem} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
