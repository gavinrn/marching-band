//imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";

import Auth from "../graphql/auth";
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  //Return HTML code
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-12">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">TBD</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="gradient-custom" onSubmit={handleFormSubmit}>
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card bg-dark text-white" style={{ borderRadius: 1 }}>
                        <div className="card-body p-5 text-center">

                          <div className="mb-md-5 mt-md-4 pb-5">

                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your login and password!</p>

                            <div className="form-outline form-white mb-4">
                              <input placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange} className="form-control form-control-lg" />
                              <label className="form-label" for="typeEmailX">Email</label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input placeholder="******"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange} className="form-control form-control-lg" />
                              <label className="form-label" for="typePasswordX">Password</label>
                            </div>

                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                          </div>

                          <div>
                            <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
