import React from "react";
import "../styles/HomeScreen.css";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <section className="page-container">
      <div className="content-container">
        <header className="page-header">Home</header>
        <div className="project-details-container">
          <div className="project-list-container">
            <div className="project-list-header-container">
              <h3>Project Progress</h3>
            </div>
            <table className="project-list-table">
              <tr>
                <th className="project-table-sno">#</th>
                <th>Project</th>
                <th>Progress</th>
                <th>Status</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className="project-name">Sample Project 1</div>
                  <div className="project-due-date">Due : 2022-02-11</div>
                </td>
                <td className="project-progress">
                  <div className="project-progress-bar">
                    <ProgressBar progress={10} />
                  </div>
                  <div className="project-progress-text">10% Complete</div>
                </td>
                <td>
                  <span className="status-container status-progress">
                    On-progress
                  </span>
                </td>
                <td>
                  <Link to="/project" className="project-view-button">
                    <i class="fa-solid fa-folder"></i> View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div className="project-name">Sample Project 2</div>
                  <div className="project-due-date">Due : 2022-02-11</div>
                </td>
                <td className="project-progress">
                  <div className="project-progress-bar">
                    <ProgressBar progress={80} />
                  </div>
                  <div className="project-progress-text">80% Complete</div>
                </td>
                <td>
                  <span className="status-container status-progress">
                    On-progress
                  </span>
                </td>
                <td>
                  <Link to="/project" className="project-view-button">
                    <i class="fa-solid fa-folder"></i> View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div className="project-name">Sample Project 3</div>
                  <div className="project-due-date">Due : 2022-02-11</div>
                </td>
                <td className="project-progress">
                  <div className="project-progress-bar">
                    <ProgressBar progress={0} />
                  </div>
                  <div className="project-progress-text">0% Complete</div>
                </td>
                <td>
                  <span className="status-container status-start">Started</span>
                </td>
                <td>
                  <Link to="/project" className="project-view-button">
                    <i class="fa-solid fa-folder"></i> View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="project-name">Sample Project 4</div>
                  <div className="project-due-date">Due : 2022-02-11</div>
                </td>
                <td className="project-progress">
                  <div className="project-progress-bar">
                    <ProgressBar progress={100} />
                  </div>
                  <div className="project-progress-text">100% Complete</div>
                </td>
                <td>
                  <span className="status-container status-complete">
                    Completed
                  </span>
                </td>
                <td>
                  <Link to="/project" className="project-view-button">
                    <i class="fa-solid fa-folder"></i> View
                  </Link>
                </td>
              </tr>
            </table>
          </div>
          <div className="task-details-container">
            <div className="project-count-container">
              <div>
                <div className="project-count">2</div>
                <div className="total-project-text">Total Projects</div>
              </div>
              <div className="project-icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>
            </div>
            <div className="project-count-container">
              <div>
                <div className="project-count">4</div>
                <div className="total-project-text">Total Tasks</div>
              </div>
              <div className="project-icon">
                <i className="fa-solid fa-list-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
