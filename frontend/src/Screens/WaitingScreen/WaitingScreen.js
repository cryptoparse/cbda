import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoadingAction from "../../components/LoadingAction";
import {
  checkGroupingDone,
  getGroupNumber,
  getUserData,
} from "../../Services/apis";
import {  useNavigate } from "react-router-dom";

function WaitingScreen() {
  let navigate = useNavigate()
  
  useEffect(() => {
      
    loadingRef.current.loadingOn();
    const interval = setInterval(() => {
      checkGroupingDone((res) => {
        console.log(res)
        if (res === "YES") {          
            navigate('/groupDisplay')
        } else {
        }
      })
    }, 2000)
    return () => clearInterval(interval);
  },[]);
  const loadingRef = useRef();

  return (
    <div>
      <div className="d-grid gap-2">
        <LoadingAction ref={loadingRef} />
        <h3>Please wait while others Fill</h3>
      </div>
    </div>
  );
}

export default WaitingScreen;
