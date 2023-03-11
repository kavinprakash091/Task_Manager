import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import "../styles/SignupScreen.css";
import { getError } from "../utils";

export default function SignupScreen() {
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const [companyId, setCompanyId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Mismatch Password");
      return;
    }
    try {
      const { data } = await Axios.put(
        id ? `/api/users/update/${id}` : "/api/users/signup",
        {
          companyId,
          firstname,
          lastname,
          role,
          email,
          password,
        },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      toast.success(
        email + (id ? " updated successfully!" : " added successfully!")
      );
      navigate("/users");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const resetHandler = () => {
    setCompanyId("");
    setFirstname("");
    setLastname("");
    setRole("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await Axios.get(`/api/users/${id}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        setCompanyId(data.company_id);
        setFirstname(data.first_name);
        setLastname(data.last_name);
        setRole(data.role);
        setEmail(data.email);
        setPassword(data.password);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    if (id) {
      fetchUser();
    }
  }, []);

  return (
    <section className="page-container">
      <Helmet>
        <title>Add User</title>
      </Helmet>
      <div className="content-container">
        <header className="page-header">
          {id ? `Edit User  <${email}>` : "New User"}
        </header>
        <div className="signup-container">
          <form onSubmit={submitHandler}>
            <div className="signup-form-container">
              <div className="signup-left-container">
                <div className="input-fields">
                  <label for="companyId">
                    Company Id <span className="required-item">*</span>
                  </label>
                  <input
                    id="companyId"
                    type="text"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                    required
                  />
                </div>
                <div className="input-fields">
                  <label for="firstname">
                    First Name <span className="required-item">*</span>
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="input-fields">
                  <label for="lastname">
                    Last Name <span className="required-item">*</span>
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="signup-right-container">
                <div className="input-fields">
                  <label for="role">
                    Role <span className="required-item">*</span>
                  </label>
                  <select
                    id="role"
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option
                      value="Project Manager"
                      {...(role === "Project Manager" && "selected")}
                    >
                      Project Manager
                    </option>
                    <option
                      value="Scrum Master"
                      {...(role === "Scrum Master" && "selected")}
                    >
                      Scrum Master
                    </option>
                    <option
                      value="Developer"
                      {...(role === "Developer" && "selected")}
                    >
                      Developer
                    </option>
                    <option
                      value="Tester"
                      {...(role === "Tester" && "selected")}
                    >
                      Tester
                    </option>
                  </select>
                </div>
                <div className="input-fields">
                  <label for="firstname">
                    Email <span className="required-item">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-fields">
                  <label for="lastname">
                    Password <span className="required-item">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-fields">
                  <label for="lastname">
                    Confirm Password <span className="required-item">*</span>
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="signup-button-container">
              <button
                type="reset"
                onClick={resetHandler}
                className="signup-cancel-button"
              >
                Cancel
              </button>
              <button type="submit" className="signup-save-button">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
