import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getUserData, getGroupNumber } from "./../../Services/apis";
function GroupScreen() {
  const [gpNum, setGN] = useState(null);
  useEffect(() => {
    getUserData((user) => {
      getGroupNumber((group) => {
        setGN(group);
      }, user.email);
    });
  }, []);

  return (
    <div>
      <div className="d-grid gap-2 border pd-2 border-success">
        <h2>You Belong to {gpNum}</h2>
        <p className="form-label">
          Please Contact volunteers to help you find your group members
        </p>
      </div>
    </div>
  );
}

export default GroupScreen;
