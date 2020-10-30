import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const verifyUser = () => {
    if (credentials.password === "let-me-in") {
      console.log("SUCCESSFUL LOGIN");
      alert("You're in! Click OK to continue.");
      history.push("/secret");
    } else {
      console.log("ERRONEOUS CREDENTIALS");
      alert("Erroneous Credentials");
    }
  };

  return (
    <div>
      <input
        value={credentials.email}
        type="text"
        placeholder="Please enter your e-mail address"
        onChange={(event) =>
          setCredentials({
            email: event.target.value,
            password: credentials.password,
          })
        }
      />
      <input
        value={credentials.password}
        type="password"
        placeholder="enter your password"
        onChange={(event) =>
          setCredentials({
            email: credentials.email,
            password: event.target.value,
          })
        }
      />
      <button
        disabled={
          !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(
            credentials.email
          )
        }
        onClick={() => verifyUser()}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
