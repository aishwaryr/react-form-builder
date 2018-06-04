import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FormBuilder from "./FormBuilder";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={FormBuilder} />
        {/* <Route path="/product/:id" component={Details} /> */}
        {/* <Route path="/product-form" component={ProductForm} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
