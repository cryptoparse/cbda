import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./IceBreakerFormScreen.css";
import { getUserData, savePhase1 } from "../../Services/apis";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
export default function IceBreakerFormScreen() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [inputField, setInputField] = useState({
    email: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
  });
  useEffect(() => {
    getUserData((data) => {
      setInputField({ ...inputField, email: data.email });
    });
  }, []);
  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  function submitAction(e) {
    savePhase1(() => {}, inputField).then(

    )
    
  }

  return (
    <div>
      <div>
        <div>
          <h1>Phase 1: Teamify </h1>
        </div>
        <br />
        <form onSubmit={submitAction}>
          <br />
          <label for="q1" className="form-label">
            Which course are you have enrolled to in?
          </label>
          <select
            id="q1"
            className="form-select"
            name="q1"
            value={inputField.q1}
            onChange={inputsHandler}
            required
          > <option selected value="">Chose an Option</option>
            <option value="op1">BCOM</option>
            <option value="op2">BBA</option>
            <option value="op3">BSc Psychology</option>
            <option value="op4">BBA Analytics</option>
            <option value="op4">BCOM with ACCA</option>
          </select>

          <br />
          <label for="q2" className="form-label">
            Which one of the following color do you like?
          </label>
          <select
            id="q2"
            className="form-select"
            name="q2"
            value={inputField.q2}
            onChange={inputsHandler}
            required
          > <option selected value="">Chose an Option</option>
            <option value="op1">Red</option>
            <option value="op2">Blue</option>
            <option value="op3">Yellow</option>
            <option value="op4">Green</option>
            <option value="op5">Pink</option>
            <option value="op6">Black</option>
          </select>

          <br />
          <label for="course" className="form-label">
            What is your favorite subject?
          </label>
          <select
            id="q3"
            className="form-select"
            name="q3"
            value={inputField.q3}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Math</option>
            <option value="op2">Science</option>
            <option value="op3">Social Studies</option>
            <option value="op4">Geography</option>
          </select>

          <br />
          <label for="q4" className="form-label">
            Which DC superhero do you prefer?
          </label>
          <select
            id="q4"
            className="form-select"
            name="q4"
            value={inputField.q4}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Batman</option>
            <option value="op2">Superman</option>
            <option value="op3">Wonder Woman</option>
            <option value="op4">Flash</option>
          </select>

          <br />
          <label for="q5" className="form-label">
            What kind of movies do you like?
          </label>
          <select
            id="q5"
            className="form-select"
            name="q5"
            value={inputField.q5}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Thriller</option>
            <option value="op2">Drama</option>
            <option value="op3">Action</option>
            <option value="op4">Horror</option>
            <option value="op5">Comedy</option>
            <option value="op6">Romance</option>
          </select>
          <br />
          <label for="q6" className="form-label">
            Which one do you prefer?
          </label>
          <select
            id="q6"
            className="form-select"
            name="q6"
            value={inputField.q6}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Android</option>
            <option value="op2">IOS</option>
          </select>
          <br />
          <label for="q7" className="form-label">
            Would you prefer to watch
          </label>
          <select
            id="q7"
            className="form-select"
            name="q7"
            value={inputField.q7}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Series</option>
            <option value="op2">Movies</option>
          </select>
          <br />
          <label for="q8" className="form-label">
            Which one do you prefer for eating food?
          </label>
          <select
            id="q8"
            className="form-select"
            name="q8"
            value={inputField.q8}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Dine in </option>
            <option value="op2">Takeaway or Online Order</option>
          </select>
          <br />
          <label for="q9" className="form-label">
            Which media do you prefer to read from?
          </label>
          <select
            id="q9"
            className="form-select"
            name="q9"
            value={inputField.q9}
            onChange={inputsHandler}
            required
          >
            <option selected value="">Chose an Option</option>
            <option value="op1">Paper-book</option>
            <option value="op2">PDF or Online</option>
          </select>
          <br />
          <label for="q10" className="form-label">
            Ideal Vacation Place
          </label>
          <select
            id="q10"
            className="form-select"
            name="q10"
            value={inputField.q10}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>          
            <option value="op1">Mountains</option>
            <option value="op2">Beaches</option>
          </select>
          <br />
          <label for="q11" className="form-label">
            Which pet do you prefer?
          </label>
          <select
            id="q11"
            className="form-select"
            name="q11"
            value={inputField.q11}
            onChange={inputsHandler}
            required
          ><option selected value="">Chose an Option</option>
            <option value="op1">Cats</option>
            <option value="op2">Dogs</option>
            <option value="op3">Birds</option>
            <option value="op4">Fish</option>
          </select>
          <br />

          <button type="submit" value="submit" className="submit btn btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
