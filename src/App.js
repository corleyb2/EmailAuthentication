import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Secret from "./pages/Secret";

//PrivateRoute for secret page?

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/secret" component={Secret} />
    </Switch>
  );
}

export default App;
