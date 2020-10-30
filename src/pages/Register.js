import React, { useState } from "react";

const Register = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // api call to create an account here with name, username (email), and password

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
      <button>Create Account</button>
    </div>
  );
};

export default Register;
