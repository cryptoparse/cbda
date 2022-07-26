import React, { useState } from "react";

export default function ExcelAtExcelScreen() {
  const [inputField, setInputField] = useState({
    c1q1: "",
    c1q2: "",
    c1q3: "",
    c1q4: "",
    c1q5: "",
    c1q6: "",
    c2q1: "",
    c2q2: "",
    c2q3: "",
    c2q4: "",
    c2q5: "",
    c2q6: "",
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
        <form onSubmit={submitAction}>
          <h1>Case 1: Swiggy Data - Pre and Post Diwali</h1>
          <br />
          <div className="mb-3">
            <label for="c1q1" className="form-label">
              Find the item which has been sold 4th most pre diwali
            </label>
            <br />

            <input
              id="c1q1"
              type="text"
              name="c1q1"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c1q1}
            />
          </div>
          <br />
          <div className="mb-3">
            <label for="c1q2" className="form-label">
              Find the change in quantity per order from pre to post Diwali
            </label>
            <br />

            <input
              id="c1q2"
              type="text"
              name="c1q2"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c1q2}
            />
          </div>
          <br />
          <div>
            <label for="c1q3" className="form-label">
              Find the difference in total gross merchandise value, of the
              highest sold quantity from both the data set(pre and post diwali)
              in the GMV range 250-300
            </label>
            <select
              id="c1q3"
              className="form-select"
              name="c1q3"
              value={inputField.c1q3}
              onChange={inputsHandler}
            >
              <option selected>Choose your Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label for="c1q4" className="form-label">
              What hour of the day were the highest orders between 15th to 17th
              October?
            </label>
            <br />

            <input
              id="c1q4"
              type="text"
              name="c1q4"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c1q4}
            />
          </div>
          <br />
          <div>
            <label for="c1q5" className="form-label">
              If you are the operations manager of Swiggy in which city would
              you increase the number of delivery partners pre diwali?
            </label>
            <select
              id="c1q5"
              className="form-select"
              name="c1q5"
              value={inputField.c1q5}
              onChange={inputsHandler}
            >
              <option selected>Choose your Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <br />
          <div>
            <label for="c1q6" className="form-label">
              If you were planning to start a sweet shop, by analyzing the data
              which sweets stock would you increase in the warehouse pre Diwali?
            </label>
            <select
              id="c1q6"
              className="form-select"
              name="c1q6"
              value={inputField.c1q6}
              onChange={inputsHandler}
            >
              <option selected>Choose your Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <br />
          <br />
          <h1>Case 2: Salary of a Data Scientist </h1>
          <br />
          <div className="mb-3">
            <label for="c2q1" className="form-label">
              Find the average salary in a small size company
            </label>
            <br />

            <input
              id="c2q1"
              type="text"
              name="c2q1"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q1}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q2" className="form-label">
              Find the 3 job titles with the lowest salaries.
            </label>
            <br />

            <input
              id="c2q2"
              type="text"
              name="c2q2"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q2}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q3" className="form-label">
              If you plan on taking a job role as a Big Data Engineer, which
              company size would you prefer? (With the motive of getting the
              highest possible salary).
            </label>
            <br />

            <input
              id="c2q3"
              type="text"
              name="c2q3"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q3}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q4" className="form-label">
              What is the median salary a part timer (PT) gets?
            </label>
            <br />

            <input
              id="c2q4"
              type="text"
              name="c2q4"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q4}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q5" className="form-label">
              How much increment in your salary would you expect when you
              receive a promotion from mid-level to senior level?
            </label>
            <br />

            <input
              id="c2q5"
              type="text"
              name="c2q5"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q5}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q6" className="form-label">
              Find the change in salary level from 2020 to 2021 and 2021 to
              2022.
            </label>
            <br />

            <input
              id="c2q6"
              type="text"
              name="c2q6"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              value={inputField.c2q6}
            />
          </div>

          <br />
          <button type="submit" value="submit" className="submit btn btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
