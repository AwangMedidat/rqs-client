import React, { useState } from "react";
import DNLogo from "../../images/Darunnajah.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        JSON.stringify(values),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.data));
      //   console.log(response.data.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //   const goHome = () => {
  //     navigate("/");
  //   };

  return (
    <div className="bg-gradient-success" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <img src={DNLogo} alt="" style={{ width: "600px" }} />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5" style={{ marginTop: "100px" }}>
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome RQS System
                        </h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputUsername"
                            aria-describedby="emailHelp"
                            placeholder="Enter Username..."
                            onChange={(e) => {
                              setValues({
                                ...values,
                                username: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={(e) => {
                              setValues({
                                ...values,
                                password: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-success btn-user btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
