import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import "../styles/UserListScreen.css";
import { getError } from "../utils";

export default function UserListScreen() {
  const params = useParams();
  const { id } = params;
  const [search, setSearch] = useState("");
  const [actionOpen, setActionOpen] = useState(1);
  const [isActionOpen, setIsActionOpen] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, userList } = state;

  const fetchUsers = async () => {
    try {
      const { data } = await Axios.get("/api/users", {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      ctxDispatch({ type: "USER_LISTS", payload: data });
      localStorage.setItem("userLists", JSON.stringify(data));
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const deleteHandler = async () => {
    try {
      const { data } = await Axios.post(`/api/users/remove/${id}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      fetchUsers();
      toast.success(data.email + " removed successfully!");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="page-container">
      <Helmet>
        <title>Users</title>
      </Helmet>
      <div className="content-container">
        <header className="page-header">User List</header>
        <div className="user-list-container">
          <div className="add-user-button-container">
            <Link to="/signup" className="add-user-button">
              <i class="fa-solid fa-plus"></i> Add New User
            </Link>
          </div>
          <div className="user-count-details-container">
            <div className="entries-container">
              Show
              <span className="entries-count">
                {userList.length}
                <span className="entry-sort-button">
                  <i className="fa-solid fa-sort"></i>
                </span>
              </span>
              entries
            </div>
            <div className="user-search-container">
              Search :
              <input
                className="user-search-box"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="user-list-table">
            <tr>
              <th className="user-table-sno"># </th>
              <th>
                Company Id{" "}
                <span className="user-sort-button">
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Name{" "}
                <span className="user-sort-button">
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Email{" "}
                <span className="user-sort-button">
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>
                Role{" "}
                <span className="user-sort-button">
                  <i className="fa-solid fa-sort"></i>
                </span>
              </th>
              <th>Action</th>
            </tr>
            {userList.map((x, idx) => (
              <tr key={x._id}>
                <td>{idx + 1}</td>
                <td>{x.company_id}</td>
                <td>
                  {x.first_name}
                  <span> {x.last_name}</span>
                </td>
                <td>{x.email}</td>
                <td>{x.role}</td>
                <td>
                  <button
                    className="user-action-button"
                    onClick={() => {
                      setActionOpen(idx + 1);
                      setIsActionOpen(!isActionOpen);
                    }}
                  >
                    Action <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <ul
                    className={
                      actionOpen === idx + 1 && isActionOpen
                        ? "user-action-list-container active-user-action"
                        : "user-action-list-container"
                    }
                  >
                    <li>
                      <Link
                        to={`/signup/${x._id}`}
                        className="user-edit-button"
                      >
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/users/${x._id}`}
                        className="user-delete-button"
                        onClick={deleteHandler}
                      >
                        Delete <i class="fa-solid fa-trash"></i>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
