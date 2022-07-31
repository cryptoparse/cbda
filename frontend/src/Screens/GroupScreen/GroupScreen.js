import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getUserData, getGroupNumber } from "./../../Services/apis";
import { useNavigate } from "react-router";
function GroupScreen() {
  let navigate = useNavigate();
  const [gpNum, setGN] = useState(null);
  useEffect(() => {
    getUserData((user) => {
      getGroupNumber((group) => {
        setGN(group);
      }, user.email);
    });
  }, []);
  const startEventPhase2 = () => {
    navigate("/excelAtExcelDisplay");
  };
  return (
    <div>
      <div className="d-grid gap-2 border pd-2 border-success">
        <h2 className="p-2">You Belong to {gpNum}</h2>
        <p className="form-label p-2">
          Please Contact volunteers to help you find your team members
        </p>
        <div className="d-flex flex-column bd-highlight mb-3">
          <button
            type="button "
            className="btn btn-lg"
            onClick={startEventPhase2}
          >
            GO TO PHASE 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupScreen;
