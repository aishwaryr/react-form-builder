import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import FormBuilder from "./FormBuilder";
import Forms from "./Forms";
import "./App.css";

localStorage.removeItem("formData");

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={FormBuilder} />
          <Route path="/forms" component={Forms} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
