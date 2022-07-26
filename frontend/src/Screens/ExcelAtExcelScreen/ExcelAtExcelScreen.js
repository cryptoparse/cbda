import React, { useState } from "react";

export default function ExcelAtExcelScreen() {
  const [inputField, setInputField] = useState({
    c1q1: 0,
    c1q2: 0,
    c1q3: 0,
    c1q4: 0,
    c1q5: 0,
    c1q6: 0,
    c2q1: 0,
    c2q2: 0,
    c2q3: 0,
    c2q4: 0,
    c2q5: 0,
    c2q6a: 0,
    c2q6b: 0,
  });
  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: Number(e.target.value) });
  };
  const inputFieldHandler = (e) => {
    var score = 0;
    var real = 0;
    let val = Number(e.target.value);
    switch (e.target.name) {
      case "c1q2":
        real = 728;
        break;
      case "c1q3":
        real = 156963;
        break;
      case "c2q1":
        real = 377710;
        break;
      case "c2q4":
        real = 18817.5;
        break;
      case "c2q5":
        real = 143.31;
        break;
      case "c2q6a":
        real = 4.21;
        break;
      case "c2q6b":
        real = 24.7;
        break;

      default:
        break;
    }
    if ((real - val) / real > 1) {
      score = 0;
    } else if ((real - val) / real < -1) {
      score = 0;
    } else {
      score = (1 - (real - val) / real) * 9.5;
    }

    setInputField({ ...inputField, [e.target.name]: score });
  };
  const submitAction = (e) => {
    let finalTotal = Object.values(inputField).reduce(
      (total, value) => total + value,
      0
    );
    let finalScore = (finalTotal / 130) * 100;
    let logicalScore =
      (100 *
        (inputField.c1q3 +
          inputField.c1q4 +
          inputField.c2q3 +
          inputField.c2q5)) /
      40;
    let excelScore =
      (100 *
        (inputField.c1q1 +
          inputField.c1q2 +
          inputField.c1q3 +
          inputField.c2q2 +
          inputField.c2q4)) /
      50;
    let mathScore =
      (100 *
        (inputField.c1q1 +
          inputField.c2q1 +
          inputField.c2q4 +
          inputField.c2q6a +
          inputField.c2q6b)) /
      50;
    let analyticScore =
      (100 *
        (inputField.c1q5 +
          inputField.c1q6 +
          inputField.c2q3 +
          inputField.c2q5)) /
      40;
  };

  return (
    <div>
      <div>
        <form onSubmit={submitAction}>
          <h1>Case 1: Swiggy Data - Pre and Post Diwali</h1>
          <br />
          <div className="mb-3">
            <label for="c1q1" className="form-label">
              1. Find the item which has been sold 5th most pre diwali
            </label>
            <br />

            <select
              id="c1q1"
              className="form-select"
              name="c1q1"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="10">White Rasgulla (1 Pc)</option>
              <option value="8">Hot Jalebi</option>
              <option value="6">Poori Chole</option>
              <option value="4">Samosa</option>
              <option value="2">Ras Malai (Per Pcs)</option>
            </select>
          </div>
          <br />
          <div className="mb-3">
            <label for="c1q2" className="form-label">
              2. Find the change in total number of orders from pre to post
              Diwali.
            </label>
            <br />

            <input
              id="c1q2"
              type="number"
              name="c1q2"
              step="any"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputFieldHandler}
            />
          </div>
          <br />
          <div>
            <label for="c1q3" className="form-label">
              3. Find the increase in order quantity, of the highest sold
              quantity after Diwali to that item before diwali.
            </label>
            <br />

            <input
              id="c1q3"
              type="number"
              name="c1q3"
              step="any"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputFieldHandler}
            />
          </div>
          <br />
          <div className="mb-3">
            <label for="c1q4" className="form-label">
              4. What hour of the day were the highest orders between 15th to
              17th October?
            </label>
            <br />

            <select
              id="c1q4"
              className="form-select"
              name="c1q4"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="4">15th Hour</option>
              <option value="2">10th Hour</option>
              <option value="10">18th Hour</option>
              <option value="6">20th Hour</option>
              <option value="8">17th Hour</option>
            </select>
          </div>
          <br />
          <div>
            <label for="c1q5" className="form-label">
              5. If you are the operations manager of Swiggy in which city would
              you increase the number of delivery partners pre diwali?
            </label>
            <select
              id="c1q5"
              className="form-select"
              name="c1q5"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="2">City 19</option>
              <option value="6">City 10048</option>
              <option value="4">City 10459</option>
              <option value="10">City 7</option>
              <option value="2">City 53</option>
            </select>
          </div>
          <br />
          <div>
            <label for="c1q6" className="form-label">
              6. If you were planning to start a sweet shop, by analyzing the
              data which sweets stock would you increase in the warehouse pre
              Diwali?
            </label>
            <br />
            <select
              id="c1q6"
              className="form-select"
              name="c1q6"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="6">Kaju Barfi</option>
              <option value="4">Gulab Jamun</option>
              <option value="10">Rasogulla</option>
              <option value="2">Kalakand</option>
              <option value="2">Kaju Katli</option>
            </select>
          </div>
          <br />
          <br />
          <h1>Case 2: Salary of a Data Scientist </h1>
          <br />
          <div className="mb-3">
            <label for="c2q1" className="form-label">
              1. Find the average salary in a small size company
            </label>
            <br />

            <input
              id="c2q1"
              type="number"
              name="c2q1"
              step="any"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputFieldHandler}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q2" className="form-label">
              2. Find the job title with the 3rd lowest salary.
            </label>
            <br />

            <select
              id="c2q2"
              className="form-select"
              name="c2q2"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="2">Data Engineer</option>
              <option value="2">Big Data Engineer</option>
              <option value="4">Data Science Consultant</option>
              <option value="10">3D Computer Vision Researcher</option>
              <option value="4">Data Scientist</option>
            </select>
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q3" className="form-label">
              3. If you plan on taking a job role as a Big Data Engineer, which
              company size would you prefer? (With the motive of getting the
              highest possible salary)(mention compan_id).
            </label>
            <br />

            <select
              id="c2q3"
              className="form-select"
              name="c2q3"
              onChange={inputsHandler}
            >
              <option value="0" selected>
                Choose your Option
              </option>
              <option value="10">Company 17</option>
              <option value="6">Company 2</option>
              <option value="4">Company 255</option>
              <option value="2">Company 12</option>
            </select>
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q4" className="form-label">
              4. What is the median salary a part timer (PT) gets?
            </label>
            <br />

            <input
              id="c2q4"
              type="number"
              step="any"
              name="c2q4"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputFieldHandler}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q5" className="form-label">
              5. How much increment (in percentage) in your salary would you
              expect when you receive a promotion from mid-level(MI) to senior
              level(SE)?
            </label>
            <br />

            <input
              id="c2q5"
              type="number"
              step="any"
              name="c2q5"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputFieldHandler}
            />
          </div>

          <br />
          <div className="mb-3">
            <label for="c2q6a" className="form-label">
              6. Find the change in salary level from (in percentage) 2020 to
              2021 and 2021 to 2022.
            </label>
            <br />
            <br />
            <br />

            <label for="c2q6a" className="form-label">
              2020 to 2021
            </label>
            <input
              id="c2q6a"
              type="number"
              step="any"
              name="c2q6a"
              placeholder="2020 to 2021"
              className="form-control"
              onChange={inputFieldHandler}
            />
            <br />
            <label for="c2q6a" className="form-label">
              2021 to 2022
            </label>
            <input
              id="c2q6b"
              type="number"
              step="any"
              name="c2q6b"
              placeholder="2021 to 2022"
              className="form-control"
              onChange={inputFieldHandler}
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
