import React, { useState, useEffect } from "react";
import c3q2_I from "../../assets/images/c3q2.png";
import c3q6_I from "../../assets/images/c3q6.png";
import c3q8_I from "../../assets/images/c3q8.png";
import {
  getUserData,
  getGroupNumber,
  checkIfResult,
} from "../../Services/apis";
import { useNavigate, useLocation } from "react-router";
import Cookies from "universal-cookie";

export default function ExcelAtExcelScreen() {
  let navigate = useNavigate();
  const [gpNum, setGN] = useState(null);
  useEffect(() => {
    const cookies = new Cookies();
    const gno = cookies.get("gno");
    setGN(gno);
  }, []);
  const startEventPhase2 = () => {
    checkIfResult(gpNum, (resp) => {
      if (resp == "YES") {
        navigate("/groupReport/");
        navigate(1);
      } else {
        alert("Please Submit your Team Response");
      }
    });
  };
  const [inputField, setInputField] = useState({
    group: "",
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
    c3q1: 0,
    c3q2: 0,
    c3q3: 0,
    c3q4: 0,
    c3q5: 0,
    c3q6: 0,
    c3q7: 0,
    c3q8: 0,
    c3q9: 0,
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

  return (
    <div>
      <div>
        <form>
          <br />
          <div>
            <div className="d-grid gap-2 border pd-2 border-success">
              <h2 className="p-2">You Belong to {gpNum}</h2>
              <p className="form-label p-2">
                <b>Instructions :</b> Please read the caselets and the questions
                below. Solve the questions. Once done, ask your respective
                volunteers to assist your team in submitting your answers
              </p>
              <div className="d-flex flex-column bd-highlight mb-3"></div>
            </div>
          </div>
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
              <option value="" selected>
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
              <option value="" selected>
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
              <option value="" selected>
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
              <option value="" selected>
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
              1. Find the average salary in a small size company (in USD)
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
              <option value="" selected>
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
              <option value="" selected>
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
          <div>
            <br />
            <h1>Case 3: Logical and Analytical Reasoning</h1>
            <br />
            <div className="mb-3">
              <label for="c3q1" className="form-label">
                1. In a certain language, BOOK is written as 4300, MATE is
                written as 3900. Then 1600 will represent which word out of
                given alternatives?
              </label>
              <br />

              <select
                id="c3q1"
                className="form-select"
                name="c3q1"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">GOOD</option>
                <option value="0">WOOD</option>
                <option value="0">CRAB</option>
                <option value="10">CAGE</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                2. Find the number of triangles in the given figure?
              </label>
              <br />
              <img src={c3q2_I} />
              <br />

              <select
                id="c3q2"
                className="form-select"
                name="c3q2"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">8</option>
                <option value="0">10</option>
                <option value="10">14</option>
                <option value="0">16</option>
              </select>
              <br />
            </div>

            <div className="mb-3">
              <label for="c3q2" className="form-label">
                3. A sum of money at simple interest amounts to Rs. 815 in 3
                years and to Rs. 854 in 4 years. The sum is:
              </label>
              <br />

              <select
                id="c3q3"
                className="form-select"
                name="c3q3"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">Rs 651</option>
                <option value="0">Rs 692</option>
                <option value="10">Rs 698</option>
                <option value="0">Rs 704</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                4. If one-third of one-fourth of a number is 15, then
                three-tenth of that number is
              </label>
              <br />

              <select
                id="c3q4"
                className="form-select"
                name="c3q4"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">35</option>
                <option value="0">36</option>
                <option value="0">45</option>
                <option value="10">54</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                5. The total age of Akash, Akbar and Abhishek is 80 years. What
                was the total of their ages three years ago?
              </label>
              <br />

              <select
                id="c3q5"
                className="form-select"
                name="c3q5"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="10">71 Years</option>
                <option value="0">72 Years</option>
                <option value="0">74 Years</option>
                <option value="0">77 Years</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                6. Identify the figure that completes the pattern?
              </label>
              <br />
              <img src={c3q6_I} />
              <br />

              <select
                id="c3q6"
                className="form-select"
                name="c3q6"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="10">4</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                7. 7, 10, 8, 11, 9, 12, ... What number should come next?
              </label>
              <br />

              <select
                id="c3q7"
                className="form-select"
                name="c3q7"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">7</option>
                <option value="10">10</option>
                <option value="0">12</option>
                <option value="0">13</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                8. Choose the alternative which closely resembles the mirror
                image of the given combination.
              </label>
              <br />
              <img src={c3q8_I} />
              <br />

              <select
                id="c3q8"
                className="form-select"
                name="c3q8"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">1</option>
                <option value="10">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                9. Look at this series: 8, 6, 9, 23, 87 , ... What number should
                come next?
              </label>
              <br />

              <select
                id="c3q9"
                className="form-select"
                name="c3q9"
                onChange={inputsHandler}
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">226</option>
                <option value="0">324</option>
                <option value="10">429</option>
                <option value="0">537</option>
              </select>
              <br />
            </div>
          </div>

          <br />
        </form>
      </div>
    </div>
  );
}
