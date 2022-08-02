import React, { useEffect, useState } from "react";
import "./StudentDetailsScreen.css";
import "bootstrap/dist/css/bootstrap.css";
import useForm from "../../hooks/formValidate";
import Cookies from "universal-cookie";
import { createUser, getUserData } from "./../../Services/apis";
import { useNavigate } from "react-router-dom";
export default function StudentDetailsScreen() {
  let navigate = useNavigate()
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    phonenumber: null,
  });
  const cookies = new Cookies();
  function formSubmit() {
    cookies.set("email", inputField.email, {
      path: "/",
      maxAge: 1000000,
    });
    createUser(() => {
      navigate('/teamifi')
    }, inputField);
  }
  const { handleChange, errors, handleSubmit } = useForm(formSubmit);

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    handleChange(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="username" className="form-label">
            Your Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            onChange={inputsHandler}
            value={inputField.username}
            required
          />
        </div>
        {errors.username && (
          <div id="usernameHelp" class="form-text">
            {errors.username}
          </div>
        )}
        <br />
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            onChange={inputsHandler}
            value={inputField.email}
            required
          />
        </div>
        {errors.email && (
          <div id="emailHelp" class="form-text">
            {errors.email}
          </div>
        )}
        <br />
        <div className="mb-3">
          <label for="number" className="form-label">
            Mobile Number
          </label>
          <input
            id="number"
            type="number"
            name="phonenumber"
            maxLength={10}
            className="form-control"
            onChange={inputsHandler}
            value={inputField.phonenumber}
            required
          />
        </div>
        {errors.phonenumber && (
          <div id="phonenumberHelp" class="form-text">
            {errors.phonenumber}
          </div>
        )}
        <br />
        <div className="d-flex flex-column mb-3">
        <button type="submit" value="submit" className="submit btn btn-lg p-2">
          Submit
        </button></div>
      </form>
    </div>
  );
}
