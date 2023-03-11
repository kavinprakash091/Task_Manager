import React from "react";
import "../styles/ProjectScreen.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProjectScreen() {
  return (
    <section className="page-container">
      <Helmet>
        <title>Project</title>
      </Helmet>
      <div className="content-container">
        <header className="page-header">View Project</header>

        <div className="view-project-detail-container">
          <div className="view-project-details-container">
            <div className="view-project-left-container">
              <div className="view-project-name">
                <h3>Project Name</h3>
                School Management Development
              </div>
              <div className="view-project-description">
                <h3>Description</h3>
              </div>
            </div>
            <div className="view-project-right-container">
              <div className="view-project-start-date">
                <h3>Start Date</h3>
                2022-02-11
              </div>
              <div className="view-project-end-date">
                <h3>End Date</h3>
                2023-03-14
              </div>
              <div className="view-project-status">
                <h3>Status</h3>
                <span className="project-status-start">Started</span>
              </div>
              <div className="view-project-manager">
                <h3>Project Manager</h3>
                Kavin P
              </div>
            </div>
          </div>
        </div>
        <div className="view-project-task-detail-container">
          <div className="view-project-team-members-container">
            <div className="view-project-team-members-header-container">
              Team Members
            </div>
            <div className="view-project-team-members">
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
              <div className="view-project-team-member-container">
                <div className="view-project-team-member-image-container"></div>
                <div className="view-project-team-member-name-container"></div>
                Kavin P
              </div>
            </div>
          </div>
          <div className="view-project-task-container">
            <div className="view-project-task-header-container">
              <div className="view-project-task-header">Task List</div>
              <Link className="view-project-add-task-button">
                <i className="fa-solid fa-plus"></i> New Task
              </Link>
            </div>
            <table className="view-project-task-table">
              <tr>
                <th className="view-project-table">#</th>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td className="view-project-table">1</td>
                <td>Sample Task 1</td>
                <td>Create Login Page</td>
                <td>
                  <span className="status-container status-progress">
                    On-progress
                  </span>
                </td>
                <td>
                  <button className="user-action-button">
                    Action <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <ul className="user-action-list-container">
                    <li>
                      <Link to={`/signup/`} className="user-edit-button">
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/users/`} className="user-delete-button">
                        Delete <i class="fa-solid fa-trash"></i>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="view-project-table">1</td>
                <td>Sample Task 1</td>
                <td>Create Login Page</td>
                <td>
                  <span className="status-container status-complete">
                    Completed
                  </span>
                </td>
                <td>
                  <button className="user-action-button">
                    Action <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <ul className="user-action-list-container">
                    <li>
                      <Link to={`/signup/`} className="user-edit-button">
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/users/`} className="user-delete-button">
                        Delete <i class="fa-solid fa-trash"></i>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="view-project-table">1</td>
                <td>Sample Task 1</td>
                <td>Create Login Page</td>
                <td>
                  <span className="status-container status-start">Started</span>
                </td>
                <td>
                  <button className="user-action-button">
                    Action <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <ul className="user-action-list-container">
                    <li>
                      <Link to={`/signup/`} className="user-edit-button">
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/users/`} className="user-delete-button">
                        Delete <i class="fa-solid fa-trash"></i>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="view-project-productivity-container">
          <div className="view-project-task-header-container">
            <div className="view-project-task-header">
              Members Progress/Activity
            </div>
            <Link className="view-project-add-task-button">
              <i className="fa-solid fa-plus"></i> New Productivity
            </Link>
          </div>
          <div className="view-project-productivities-container">
            <div className="view-project-productivity-card-container">
              <div className="view-project-productivity-card-header-container">
                <div className="view-project-username-container">
                  <div className="view-project-image-outline-container">
                    <div className="view-project-image-inline-container"></div>
                  </div>
                  <div>
                    <div className="view-project-username">
                      Kavin P [Sample 1]
                    </div>
                    <div className="view-project-date-container">
                      <i className="fa-solid fa-calendar-day"></i>
                      <span className="view-project-date">
                        Feb 06, 2023 <i class="fa-solid fa-user-clock"></i>{" "}
                        <span>Start : 08:00 AM | End : 10.00PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis-vertical vertical-ellipsis"></i>
                </div>
              </div>
              <div className="view-project-productivity-task-description">
                <pre>Login form:- </pre>
                <pre> -- User Module</pre>
                <pre> -- Admin Module</pre>
              </div>
            </div>
            <div className="view-project-productivity-card-container">
              <div className="view-project-productivity-card-header-container">
                <div className="view-project-username-container">
                  <div className="view-project-image-outline-container">
                    <div className="view-project-image-inline-container"></div>
                  </div>
                  <div>
                    <div className="view-project-username">
                      Kavin P [Sample 1]
                    </div>
                    <div className="view-project-date-container">
                      <i className="fa-solid fa-calendar-day"></i>
                      <span className="view-project-date">
                        Feb 06, 2023 <i class="fa-solid fa-user-clock"></i>{" "}
                        <span>Start : 08:00 AM | End : 10.00PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis-vertical vertical-ellipsis"></i>
                </div>
              </div>
              <div className="view-project-productivity-task-description">
                <pre>Login form:- </pre>
                <pre> -- User Module</pre>
                <pre> -- Admin Module</pre>
              </div>
            </div>
            <div className="view-project-productivity-card-container">
              <div className="view-project-productivity-card-header-container">
                <div className="view-project-username-container">
                  <div className="view-project-image-outline-container">
                    <div className="view-project-image-inline-container"></div>
                  </div>
                  <div>
                    <div className="view-project-username">
                      Kavin P [Sample 1]
                    </div>
                    <div className="view-project-date-container">
                      <i className="fa-solid fa-calendar-day"></i>
                      <span className="view-project-date">
                        Feb 06, 2023 <i class="fa-solid fa-user-clock"></i>{" "}
                        <span>Start : 08:00 AM | End : 10.00PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis-vertical vertical-ellipsis"></i>
                </div>
              </div>
              <div className="view-project-productivity-task-description">
                <pre>Login form:- </pre>
                <pre> -- User Module</pre>
                <pre> -- Admin Module</pre>
              </div>
            </div>
            <div className="view-project-productivity-card-container">
              <div className="view-project-productivity-card-header-container">
                <div className="view-project-username-container">
                  <div className="view-project-image-outline-container">
                    <div className="view-project-image-inline-container"></div>
                  </div>
                  <div>
                    <div className="view-project-username">
                      Kavin P [Sample 1]
                    </div>
                    <div className="view-project-date-container">
                      <i className="fa-solid fa-calendar-day"></i>
                      <span className="view-project-date">
                        Feb 06, 2023 <i class="fa-solid fa-user-clock"></i>{" "}
                        <span>Start : 08:00 AM | End : 10.00PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis-vertical vertical-ellipsis"></i>
                </div>
              </div>
              <div className="view-project-productivity-task-description">
                <pre>Login form:- </pre>
                <pre> -- User Module</pre>
                <pre> -- Admin Module</pre>
              </div>
            </div>
            <div className="view-project-productivity-card-container">
              <div className="view-project-productivity-card-header-container">
                <div className="view-project-username-container">
                  <div className="view-project-image-outline-container">
                    <div className="view-project-image-inline-container"></div>
                  </div>
                  <div>
                    <div className="view-project-username">
                      Kavin P [Sample 1]
                    </div>
                    <div className="view-project-date-container">
                      <i className="fa-solid fa-calendar-day"></i>
                      <span className="view-project-date">
                        Feb 06, 2023 <i class="fa-solid fa-user-clock"></i>{" "}
                        <span>Start : 08:00 AM | End : 10.00PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-ellipsis-vertical vertical-ellipsis"></i>
                </div>
              </div>
              <div className="view-project-productivity-task-description">
                <pre>Login form:- </pre>
                <pre> -- User Module</pre>
                <pre> -- Admin Module</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
