import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import FormBuilder from "./FormBuilder";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={FormBuilder} />
          {/* <Route path="/product/:id" component={Details} /> */}
          {/* <Route path="/product-form" component={ProductForm} /> */}
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
