import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../services/userService";

export const Login = () => {
  const [username, setUsername] = useState("john_doe");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();
  let user = {
    "username": username,
    "password": password,
  }

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByUsername(username).then((foundUsers) => {

      if (foundUsers.length !== 1) {
        const relevantUser = foundUsers;
        console.log(foundUsers)
        localStorage.setItem(
          "rare_user",
          JSON.stringify({
            id: relevantUser.id,
            userName: relevantUser.username,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="container-login">
      <section>
        <form className="form-login" >
          <h1>Rare Publishing</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Username"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button onClick={handleLogin} className="login-btn btn-info" type="button">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Create an account</Link>
      </section>
    </main>
  );
};

