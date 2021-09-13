import React from "react";
import { Route, Switch } from "react-router-dom";
import Layouts from "./Layouts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Layouts>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Layouts>
  );
};

export default App;
