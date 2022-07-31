import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoadingAction from "../../components/LoadingAction";
import {
  checkGroupingDone,
  getGroupNumber,
  getUserData,
} from "../../Services/apis";
import {  useNavigate } from "react-router-dom";

function WaitingScreen() {

  const [errorMsg,setMsg] = useState("");
  let navigate = useNavigate()
  
  const loadingRef = useRef();
  const checkGrouping = ()=>{
    checkGroupingDone((res) => {
      console.log(res)
      if (res === "YES") {          
          navigate('/groupDisplay')
      } else {
        alert("Teams not yet formed Please wait")       
  }})
  }
  return (
    <div>
      <div className="d-grid gap-2">
        <LoadingAction ref={loadingRef} />
        <div className="d-flex flex-column bd-highlight mb-3">
        <h3>Please wait while others Fill</h3>
        </div>
        <div  className="d-flex flex-column bd-highlight mb-3 ">
        <button onClick={checkGrouping} className="btn btn-lg">Click here to check if your Team has been alloted</button>
        </div>
        <br/>
        <div  className="d-flex flex-column bd-highlight mb-3">
        <p>{errorMsg}</p>
      </div>
    </div>
    </div>
  );
}

export default WaitingScreen;
