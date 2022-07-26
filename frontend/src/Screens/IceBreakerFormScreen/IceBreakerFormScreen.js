import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./IceBreakerFormScreen.css";
import Q8_IMG from "../../assets/images/p1_img1.png";
import Q9_IMG from "../../assets/images/p1_img2.png";
import icebreaker from "../../assets/images/icebreaker.png";
export default function IceBreakerFormScreen() {
  const [inputField, setInputField] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q0: "",
  });
  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const submitAction = (e) => {
    alert(inputField);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Phase 1: Teamify </h1>
        </div>
        <br />
        <form onSubmit={submitAction}>
          <label for="q1" className="form-label">
            Your Gender?
          </label>
          <select
            id="q0"
            className="form-select"
            name="q0"
            value={inputField.q0}
            onChange={inputsHandler}
          >
            <option selected>Choose your Option</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>

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
          >
            <option selected>Choose your Option</option>
            <option value="BBA">BBA</option>
            <option value="BCom">BCom</option>
            <option value="LAW">Law</option>
            <option value="BscPSY">Bsc. Psychology</option>
            <option value="Oth">Other</option>
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
          >
            <option selected>Choose your Option</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
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
          >
            <option selected>Choose your Option</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Social Studies">Social Studies</option>
            <option value="Geography">Geography</option>
            <option value="Politics">Politics</option>
            <option value="White">Performance Arts</option>
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
          >
            <option selected>Choose your Option</option>
            <option value="Batman">Batman</option>
            <option value="Superman">Superman</option>
            <option value="WonderWoman">Wonder Woman</option>
            <option value="Flash">Flash</option>
          </select>

          <br />
          <div className="mb-3">
            <label for="q5" className="form-label">
              How long do you study for a week usually?
            </label>
            <input
              id="q5"
              type="number"
              name="q5"
              maxLength={5}
              placeholder="Enter the Answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.q5}
            />
          </div>
          <label for="q6" className="form-label">
            What type of News do you like?
          </label>
          <select
            id="q6"
            className="form-select"
            name="q6"
            value={inputField.q6}
            onChange={inputsHandler}
          >
            <option selected>Choose your Option</option>
            <option value="Social">Social</option>
            <option value="Tech">Tech</option>
            <option value="Crime">Crime</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Arts">Arts</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
          </select>
          <br />
          <label for="q7" className="form-label">
            What kind of movies do you like?
          </label>
          <select
            id="q7"
            className="form-select"
            name="q7"
            value={inputField.q7}
            onChange={inputsHandler}
          >
            <option selected>Choose your Option</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
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
