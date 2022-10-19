import React, { useState } from "react";
import c3q4_I from "../../assets/images/c3q4.png";
import c3q6_I from "../../assets/images/c3q6.png";
import c3q8_I from "../../assets/images/c3q8.png";
import { savePhase2Result } from "../../Services/apis";
export default function ExcelAtExcelScreen() {
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
    c3q10: 0,
    c3q11: 0,
    c3q12: 0,
    c3q13: 0,
    c3q14: 0,
    c3q15: 0,
  });
  const gpinputsHandler = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: "Group ".concat(String(e.target.value)),
    });
  };
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
    let finalScore = parseFloat((finalTotal / 220) * 100).toFixed(2);
    let logicalScore = parseFloat(
      (100 *
        (inputField.c1q3 +
          inputField.c1q4 +
          inputField.c2q3 +
          inputField.c2q5 +
          inputField.c3q1 +
          inputField.c3q3 +
          inputField.c3q4 +
          inputField.c3q14 +
          inputField.c3q15 )) /
        90
    ).toFixed(2);
    let excelScore = parseFloat(
      (100 *
        (inputField.c1q1 +
          inputField.c1q2 +
          inputField.c1q3 +
          inputField.c2q2 +
          inputField.c2q4)) /
        50
    ).toFixed(2);
    let mathScore = parseFloat(
      (100 *
        (inputField.c1q1 +
          inputField.c2q1 +
          inputField.c2q4 +
          inputField.c2q6a +
          inputField.c2q6b +
          inputField.c3q5 +
          inputField.c3q6 +
          inputField.c3q7 +
          inputField.c3q8 +
          inputField.c3q9 +
          inputField.c3q10 +
          inputField.c3q11 +
          inputField.c3q12 +
          inputField.c3q13 
          )) /
        140
    ).toFixed(2);
    let analyticScore = parseFloat(
      (100 *
        (inputField.c1q5 +
          inputField.c1q6 +
          inputField.c2q3 +
          inputField.c2q5 +
          inputField.c3q6 +
          inputField.c3q10 +
          inputField.c3q11 +
          inputField.c3q12 +
          inputField.c3q9
          )) /
        90
    ).toFixed(2);

    savePhase2Result({
      group: "Team ".concat(String(inputField.group)),
      totalscore: finalScore,
      logicalscore: logicalScore,
      excelscore: excelScore,
      mathscore: mathScore,
      analyticalscore: analyticScore,
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={submitAction}>
          <div className="mb-3">
            <h1>Enter Team number</h1>
            <br />
            <input
              id="group"
              type="number"
              name="group"
              step="any"
              placeholder="Enter The answer"
              className="form-control"
              onChange={inputsHandler}
              required
            />
          </div>
          <br />
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <div>
            <br />
            <h1>Case 3: Logical and Analytical Reasoning</h1>
            <br />
            <div className="mb-3">
              <label for="c3q1" className="form-label">
              <strong>1.	Study the following information carefully and answer the question given below:<br/><br/>
              In a certain code language:</strong><br/><br/>
“All is well” is coded as “pq rt jk”<br/>
“All in one” is coded as “uv mn jk”<br/>
“One thing well” is coded as “pq st uv”<br/>
“In the style” is coded as “ef ab mn”<br/><br/>
What is the code of “one in style” as per the given code language? 
              </label>
              <br />

              <select
                id="c3q1"
                className="form-select"
                name="c3q1"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">ef st rt</option>
                <option value="0">pq ab mn</option>
                <option value="10">ef mn uv</option>
                <option value="0">ab jk rt</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              2.	In a certain code language ‘HARVEST’ is coded as  
 41-40-13-48-41-8-23. How will ‘HISTORY’ be coded as in that language    

              </label>
              <br />
            
              <br />

              <select
                id="c3q2"
                className="form-select"
                name="c3q2"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">41-44-8-23-13-48-40</option>
                <option value="10">51-38-33-44-43-24-23</option>
                <option value="0">51-40-24-23-44-33-8</option>
                <option value="0">41-40-38-24-44-33-13</option>
              </select>
              <br />
            </div>

            <div className="mb-3">
              <label for="c3q2" className="form-label">
              3.	Select the letter-cluster that can replace the question mark(?) in the following series.<br/><b>CXB, EZD, HCG, LGK</b>
              </label>
              <br />

              <select
                id="c3q3"
                className="form-select"
                name="c3q3"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="10">QLP</option>
                <option value="0">QPQ</option>
                <option value="0">NOP</option>
                <option value="0">OMP</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q4" className="form-label">
                4.	How many rectangles are there in the given figure?   
              </label>

              <br />
              <img src={c3q4_I} />
                <br/>
              <select
                id="c3q4"
                className="form-select"
                name="c3q4"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">35</option>
                <option value="0">34</option>
                <option value="0">33</option>
                <option value="10">31</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              5.	If the time increases by 4 years, then simple interest increases by Rs. 2000 on a sum of Rs. 5000. What is the rate (in percentage) of interest per annum?  
              </label>
              <br />

              <select
                id="c3q5"
                className="form-select"
                name="c3q5"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">12</option>
                <option value="0">15</option>
                <option value="10">10</option>
                <option value="0">20</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              6.	Divide 57 into two parts so that 8 times one part and 13 times the other are together 496. 
              </label>
              <br />
              

              <select
                id="c3q6"
                className="form-select"
                name="c3q6"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">7,49</option>
                <option value="0">49, 7</option>
                <option value="0">50, 8</option>
                <option value="10">49. 8</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              7.	The greater of two numbers whose product is 1500 and sum exceeds their difference by 50 is
              </label>
              <br />

              <select
                id="c3q7"
                className="form-select"
                name="c3q7"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">50</option>
                <option value="10">60</option>
                <option value="0">30</option>
                <option value="0">40</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              8.	How many numbers are there from 200 to 800 which are divisible by 2, 4 and 5?
              </label>
              <br />
              

              <select
                id="c3q8"
                className="form-select"
                name="c3q8"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">41</option>
                <option value="10">31</option>
                <option value="0">81</option>
                <option value="0">98</option>
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
                required
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
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              10.	If  ‘+’ means ‘÷’, ‘×’ means ‘ – ’ ,  ‘÷’ means ‘×’,  ‘ – ’ means ‘+’. What will be the value of following expression?
              </label>
              <br />

              <select
                id="c3q10"
                className="form-select"
                name="c3q10"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="10">6</option>
                <option value="0">8</option>
                <option value="0">24</option>
                <option value="0">16</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              11.	If the difference between the average of ages of  Lawyer A and Lawyer V and that of Lawyer V and Lawyer Z  is 48, what will be the difference between Lawyer A and Lawyer Z ? 

              </label>
              <br />

              <select
                id="c3q11"
                className="form-select"
                name="c3q11"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">24</option>
                <option value="0">12</option>
                <option value="10">96</option>
                <option value="0">76</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              12.	If A’s income is 20% less than that of B, how much percent B’s income is more than that of A?
              </label>
              <br />

              <select
                id="c3q12"
                className="form-select"
                name="c3q12"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="10">25%</option>
                <option value="0">55%</option>
                <option value="0">88%</option>
                <option value="0">80%</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              13.	16 boys is required to type one fourth of legal document in 20 days. How many more boys will be required to complete typing legal document in 40 days? 
              </label>
              <br />

              <select
                id="c3q13"
                className="form-select"
                name="c3q13"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">24</option>
                <option value="0">16</option>
                <option value="0">32</option>
                <option value="10">8</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
                14.	Six Lawyers are going to the six different city courts on two different dates i.e. 7th and 16th of three different months i.e. March, April and May of the same year.<br/>
B goes in the month which has an odd number of days and on odd number date. Two persons go in between B and the one who goes to Bengaluru court. Only two persons go after the one who goes to Varanasi court. A goes to Delhi court on an odd-numbered date. Only one person goes between A and F. As many people who go before F, as many people go after C. More than two persons go in between D and the E who goes to Indore court. F does not go to Chennai court. One of the persons visits Pune court.

The lawyer who goes on 7th April goes to which city court?  
              </label>
              <br />

              <select
                id="c3q14"
                className="form-select"
                name="c3q14"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="0">Chennai</option>
                <option value="10">Pune</option>
                <option value="0">Bengaluru</option>
                <option value="0">Delhi</option>
              </select>
              <br />
            </div>
            <div className="mb-3">
              <label for="c3q2" className="form-label">
              15.	Seven Lawyers A, B, C, D, E, F and G sits consecutive in vertical row. Each person likes different subjects i.e. Constitutional law, Criminal law, Environmental law, Family law, Labor law, Property law and Administrative law. All the information is not necessarily in the same order. <br/>
Two lawyers sit between B and the one, who likes Criminal law. A sits immediate above the one, who likes Criminal law. B likes Property law. More than four lawyers sit between G and F, who likes Constitutional law. F sits at the bottommost position. A likes Environmental law and sits below G but not immediately below. D, who likes Family law, sits below the one, who likes Labor law and above C. G does not like Labor law.

              </label>
              <br />

              <select
                id="c3q15"
                className="form-select"
                name="c3q15"
                onChange={inputsHandler}
                required
              >
                <option value="" selected>
                  Choose your Option
                </option>
                <option value="10">G</option>
                <option value="0">C</option>
                <option value="0">E</option>
                <option value="0">D</option>
              </select>
              <br />
            </div>
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
