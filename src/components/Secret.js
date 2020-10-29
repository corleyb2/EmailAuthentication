import React from "react";
import { useHistory } from "react-router-dom";

const Secret = (props) => {
  const history = useHistory();
  return (
    <div>
      <div>
        <h2>Secret Page</h2>
      </div>
      <div>
        <p>Welcome!</p>
        <p>
          This is a secret page with all of the secrets of the world.
          WOOOOOOOoooOOOOO!
        </p>
      </div>
      <div>
        {/* This button will need to clear the user data, so calling it Log Out */}
        <button onClick={() => history.push("/")}>Log Out</button>
      </div>
    </div>
  );
};

export default Secret;
