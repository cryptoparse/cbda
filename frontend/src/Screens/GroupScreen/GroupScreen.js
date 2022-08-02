import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getGroupNumber } from "./../../Services/apis";
import { useNavigate, useLocation } from "react-router";
function GroupScreen() {
  let navigate = useNavigate();
  const state = useLocation();
  const { email } = state;
  const [gpNum, setGN] = useState(null);
  useEffect(() => {
    async function getdata() {
      const groupno = await getGroupNumber(() => {}, email);
      setGN(groupno);
    }
    getdata();
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
