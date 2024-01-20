import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import InputControl from "./InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { async } from "@firebase/util";
import Header from "./Header";
import "../App.css";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!formData.email || !formData.pass) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, formData.email, formData.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        // console.log('User created:', res.user);

        navigate("/");
        // You can redirect or perform other actions here upon successful sign-up.
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(`Error: ${error.message}`);
        console.error("Error:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="bgpage  m-1 p-1 top-2 bg-cover bg-no-repeat">
      <Header />
      <div className=" top-1 h-screen font-serif  grid place-items-center">
        <div className="w-4/12 h-3/4 bg-black border-2 border-white rounded-2xl">
          <form action="POST" className="p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="email"
                className="text-white text-lg mb-1 font font-mono"
              >
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 m-3"
                label="Email"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label
                htmlFor="password"
                className="text-white text-lg mb-1 font font-mono"
              >
                Password
              </label>
              <input
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
                className="p-3 m-3"
                type="password"
                label="Password"
                placeholder="Enter password"
              />
            </div>

            <div className="flex flex-col gap-10">
              {errorMsg && <b className="font-bold text-red-700">{errorMsg}</b>}
              <button
                onClick={handleSubmit}
                className="mt-4 text-white w-full h-10 border hover:text-black hover:bg-cyan-50"
              >
                {" "}
                Login
              </button>
              <div className=" grid place-items-center p-3">
                <p className="font-medium text-white">
                  Already have an account?
                </p>
                <span className="font-bold text-[#5b21b6] text-base">
                  <Link to="/singup">SignUp</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
