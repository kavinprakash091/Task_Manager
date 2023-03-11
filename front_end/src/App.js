import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProjectScreen from "./screens/AddProjectScreen";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import UserListScreen from "./screens/UserListScreen";
import { Store } from "./Store";

function App() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const [isActiveNav, setActiveNav] = useState("1");
  const [isActiveSubNav, setActiveSubNav] = useState("");

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/signin");
  };

  return (
    <div>
      <Helmet>
        <title>Task Management System</title>
      </Helmet>
      <ToastContainer
        position="top-right"
        style={{ marginTop: "3%" }}
        limit={1}
      />
      {userInfo && (
        <nav className={isSidebarOpen ? "sidebar " : "sidebar active-sidebar"}>
          <div className="sidebar-header">
            {userInfo.isAdmin === "true" ? "ADMIN" : "USER"}
          </div>
          <ul className="sidebar-menu">
            <li
              className={isActiveNav === "1" && "active-menu"}
              onClick={() => setActiveNav("1")}
            >
              <i className="fa-solid fa-gauge"></i>
              <Link to="/" className="menu-item">
                {" "}
                Dashboard
              </Link>
            </li>
            <li
              className={isActiveNav === "2" && "active-menu"}
              onClick={() => setActiveNav("2")}
            >
              <i className="fa-solid fa-layer-group"></i>
              <Link
                to="/"
                className="menu-item"
                onClick={() => {
                  setProjectOpen(!isProjectOpen);
                }}
              >
                {" "}
                Projects{" "}
              </Link>
              <span className="arrow-left">
                <i
                  className={
                    isProjectOpen
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-angle-left"
                  }
                ></i>
              </span>
            </li>
            <ul
              className={
                isProjectOpen
                  ? "project-menu-container active-project"
                  : "project-menu-container"
              }
            >
              <li
                className={isActiveSubNav === "1" && "active-subNav"}
                onClick={() => setActiveSubNav("1")}
              >
                <i className="fa-solid fa-angle-right"></i>
                &nbsp;&nbsp;&nbsp;<Link to="/addproject">Add New</Link>
              </li>
              <li
                className={isActiveSubNav === "2" && "active-subNav"}
                onClick={() => setActiveSubNav("2")}
              >
                <i className="fa-solid fa-angle-right"></i>
                &nbsp;&nbsp;&nbsp;List
              </li>
            </ul>
            <li
              className={isActiveNav === "3" && "active-menu"}
              onClick={() => setActiveNav("3")}
            >
              <i className="fa-solid fa-list-check"></i>
              <Link to="/task" className="menu-item">
                {" "}
                Task
              </Link>
            </li>
            <li
              className={isActiveNav === "4" && "active-menu"}
              onClick={() => setActiveNav("4")}
            >
              <i className="fa-solid fa-list-ul"></i>
              <Link to="/report" className="menu-item">
                {" "}
                Report
              </Link>
            </li>
            {userInfo.isAdmin === "true" && (
              <div>
                <li
                  className={isActiveNav === "5" && "active-menu"}
                  onClick={() => setActiveNav("5")}
                >
                  <Link
                    to="/"
                    className="menu-item"
                    onClick={() => {
                      setUserOpen(!isUserOpen);
                    }}
                  >
                    <i className="fa-solid fa-users"></i>
                    <span className="menu-item"> Users</span>
                  </Link>
                  <span className="arrow-left">
                    <i
                      className={
                        isUserOpen
                          ? "fa-solid fa-angle-down"
                          : "fa-solid fa-angle-left"
                      }
                    ></i>
                  </span>
                </li>
                <ul
                  className={
                    isUserOpen
                      ? "user-menu-container active-user"
                      : "user-menu-container"
                  }
                >
                  <li
                    className={isActiveSubNav === "3" && "active-subNav"}
                    onClick={() => setActiveSubNav("3")}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                    &nbsp;&nbsp;&nbsp;<Link to="/signup">Add New</Link>
                  </li>
                  <li
                    className={isActiveSubNav === "4" && "active-subNav"}
                    onClick={() => setActiveSubNav("4")}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                    &nbsp;&nbsp;&nbsp;<Link to="/users">List</Link>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </nav>
      )}
      <nav className="navbar">
        <div className="navbar-brand-container">
          <button
            className="sidebar-toggle-button"
            onClick={() => {
              setSidebarOpen(!isSidebarOpen);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="navbar-brand">Task Management System</div>
        </div>
        {userInfo ? (
          <div>
            <div
              className="profile-container"
              onClick={() => setProfileOpen(!isProfileOpen)}
            >
              <i className="fa-solid fa-user"></i>
              {userInfo.first_name}
              <span>{userInfo.last_name}</span>
              <i
                className={
                  isProfileOpen
                    ? "fa-solid fa-angle-up"
                    : "fa-solid fa-angle-down"
                }
              ></i>
            </div>
            <div
              className={
                isProfileOpen
                  ? "profile-menu-container active-profile"
                  : "profile-menu-container"
              }
            >
              <ul className="profile-menus">
                <li>
                  <Link to="/profile">
                    <i className="fa-solid fa-user"></i> User Profile
                  </Link>
                </li>
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    <i className="fa-solid fa-power-off"></i> Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="signin-link">
            <Link to="/signin">
              <i className="fa-solid fa-right-to-bracket"></i> Sign In
            </Link>
          </div>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/users" element={<UserListScreen />} />
          <Route path="/users/:id" element={<UserListScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signup/:id" element={<SignupScreen />} />
          <Route path="/project" element={<ProjectScreen />} />
          <Route path="/addproject" element={<AddProjectScreen />} />
        </Routes>
      </main>

      <footer className={isSidebarOpen ? "footer " : "footer active-footer"}>
        <div className="footer-text">
          <i className="fa-regular fa-copyright"></i>
          &nbsp;&nbsp;&nbsp;Kavin, 2023. All rights reserved.
        </div>
        <div className="footer-title">Task Management System</div>
      </footer>
    </div>
  );
}

export default App;
