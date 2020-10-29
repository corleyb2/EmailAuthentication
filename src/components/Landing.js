import React from "react";
import { useHistory } from "react-router-dom";

const Landing = (props) => {
  const history = useHistory();
  console.log("LandingProps", props);

  return (
    <div>
      <h1>Welcome!</h1>
      <h3>Click below to login</h3>
      <button onClick={() => history.push("./login")}>Click to Login</button>
    </div>
  );
};

export default Landing;
