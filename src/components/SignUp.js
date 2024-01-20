import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "./InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import Header from "./Header";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.pass) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, formData.email, formData.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        // console.log('User created:', res.user);
        await updateProfile(user, {
          displayName: formData.name,
        });
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
                htmlFor="username"
                className="text-white text-lg mb-1 font font-mono"
              >
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 m-3"
                label="Name"
                placeholder="Enter Name"
              />
            </div>

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
                disabled={submitButtonDisabled}
                onClick={handleSubmit}
                className="mt-4 text-white w-full h-10 border hover:text-black hover:bg-cyan-50"
              >
                Sign Up
              </button>
              <div className=" grid place-items-center p-3">
                <p className="font-medium text-white">
                  Already have an account?
                </p>
                <span className="font-bold text-[#5b21b6] text-base">
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
