import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Secret from "./components/Secret";

//PrivateRoute for secret page?

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/secret" component={Secret} />
    </Switch>
  );
}

export default App;
