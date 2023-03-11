import React, { useContext, useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SigninScreen.css";
import Axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../utils.js";
import { Store } from "../Store.js";
import LoadingSpinner from "../components/LoadingSpinner";

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_REQUEST":
      return { ...state, loading: true };
    case "SIGNIN_SUCCESS":
      return { ...state, loading: false };
    case "SIGNIN_FAILED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function SigninScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "SIGNIN_REQUEST" });
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: "SIGNIN_SUCCESS" });
      navigate("/");
      toast.success(`Signed as ${data.email}`);
    } catch (err) {
      dispatch({ type: "SIGNIN_FAILED" });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      // navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div className="sign-in-screen-container">
      <Helmet>
        <title> Sign In </title>{" "}
      </Helmet>{" "}
      <div className="sign-in-card-container">
        <div className="sign-in-form-container">
          <h3> Welcome again😊 </h3>{" "}
          <div className="login-image-container">
            <img src={require("../assets/login.png")} alt="Sign In" />
          </div>{" "}
          <h4> Let 's be active more!</h4>{" "}
          <form onSubmit={submitHandler}>
            <div className="sign-in-input-fields">
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <i id="envelope" className="fa-solid fa-envelope icon">
                {" "}
              </i>{" "}
            </div>{" "}
            <div className="sign-in-input-fields">
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>{" "}
            <div className="forgot-password">
              <Link to="/forgotPassword"> Forgot Password ? </Link>{" "}
            </div>{" "}
            <button type="submit" className="sign-in-button">
              {" "}
              {loading ? <LoadingSpinner /> : "Sign In"}{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
        <div className="sign-in-image-container">
          <img src={require("../assets/sign_in.png")} alt="Sign In" />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
