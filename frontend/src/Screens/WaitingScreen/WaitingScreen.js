import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoadingAction from "../../components/LoadingAction";
import {
  checkGroupingDone,
  getGroupNumber,
  getUserData,
} from "../../Services/apis";

function WaitingScreen() {
  useEffect(() => {
    loadingRef.current.loadingOn();
    checkGroupingDone((status) => {
      if (status === "YES") {
        getUserData((user) => {
          getGroupNumber((group) => {
            window.location.href = "/groupDisplay";
          }, user.email);
        });
      } else {
      }
    });
  });
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
