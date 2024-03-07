import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUserByEmail } from "../../services/userService";
import "./Register.css";

export const Register = (props) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    username: "",
    password: "",
    profile_image_url: "a.jpg",
    created_on: new Date(),
    active: 1,
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "rare_user",
          JSON.stringify({
            id: createdUser.id,
            username: createdUser.username,
          })
        );
        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(user.email).then((response) => {
      if (response && response.email === user.email) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  const updateUser = (e) => {
    const copy = { ...user };
    copy[e.target.id] = e.target.value;
    setUser(copy);
    console.log(user);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Rare Publishing</h1>
        <h2>Profile Registration</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="first_name"
              className="form-control"
              placeholder="Enter your first name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="last_name"
              className="form-control"
              placeholder="Enter your last name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="password"
              className="form-control"
              placeholder="Password"
              required
              autoFocus
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="profile_image_url"
              className="form-control"
              placeholder="Profile Image URL"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="bio"
              className="form-control"
              placeholder="Bio"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
