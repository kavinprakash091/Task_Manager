import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AddProjectScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="page-container">
      <Helmet>
        <title> Add Project </title>{' '}
      </Helmet>{' '}
      <div className="content-container">
        <header className="page-header"> Add Project </header>{' '}
        <div className="signup-container">
          <form onSubmit={submitHandler}>
            <div className="signup-form-container">
              <div className="signup-left-container">
                <div className="input-fields">
                  <label for="companyId">
                    Company Id <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="companyId" type="text" required />
                </div>{' '}
                <div className="input-fields">
                  <label for="firstname">
                    First Name <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="firstname" type="text" required />
                </div>{' '}
                <div className="input-fields">
                  <label for="lastname">
                    Last Name <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="lastname" type="text" required />
                </div>{' '}
              </div>{' '}
              <div className="signup-right-container">
                <div className="input-fields">
                  <label for="role">
                    Role <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <select id="role" required>
                    <option value="Project Manager"> Project Manager </option>{' '}
                    <option value="Scrum Master"> Scrum Master </option>{' '}
                    <option value="Developer"> Developer </option>{' '}
                    <option value="Tester"> Tester </option>{' '}
                  </select>{' '}
                </div>{' '}
                <div className="input-fields">
                  <label for="firstname">
                    Email <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="email" type="email" required />
                </div>{' '}
                <div className="input-fields">
                  <label for="lastname">
                    Password <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="password" type="password" required />
                </div>{' '}
                <div className="input-fields">
                  <label for="lastname">
                    Confirm Password <span className="required-item"> * </span>{' '}
                  </label>{' '}
                  <input id="confirmPassword" type="password" required />
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="signup-button-container">
              <button
                type="reset"
                // onClick={resetHandler}
                className="signup-cancel-button"
              >
                Cancel{' '}
              </button>{' '}
              <button type="submit" className="signup-save-button">
                Save{' '}
              </button>{' '}
            </div>{' '}
          </form>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
