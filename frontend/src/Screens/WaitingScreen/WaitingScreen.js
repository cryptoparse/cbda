import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoadingAction from "../../components/LoadingAction";
import { checkGroupingDone } from "../../Services/apis";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { roomMap } from "../../hooks/roomMap";

function WaitingScreen() {
  const [grouping, setgpst] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  let navigate = useNavigate();

  const loadingRef = useRef();
  const checkGrouping = async (e) => {
    e.preventDefault();
    const response = await checkGroupingDone(userEmail);

    if (response.Action == "NO") {
      alert("Teams not yet formed. Please wait");
    } else {
      const gp = roomMap(response.groupno);
      alert("You Belong to " + gp);
      const cookies = new Cookies();
      cookies.set("gno", gp);
      navigate("/excelAtExcelDisplay");
    }
  };

  const inputsHandler = (e) => {
    setUserEmail(e.target.value);
  };
  return (
    <div>
      <div className="d-grid gap-2">
        <LoadingAction ref={loadingRef} />
        <div className="d-flex flex-column bd-highlight mb-3">
          <h3>Please Enter your Email ID</h3>
        </div>
        <form onSubmit={checkGrouping}>
          <div className="mb-3">
            <label for="email" className="form-label">
              Your Email ID
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email ID"
              onChange={inputsHandler}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex flex-column bd-highlight mb-3 ">
            <button value="submit" type="submit" className="btn btn-lg">
              Click here to check if your Team has been alloted
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default WaitingScreen;
