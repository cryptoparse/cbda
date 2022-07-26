import React, { useEffect, useState } from "react";
export default function AdminPanelScreen() {
  const [userstatus, setUserstatus] = useState({});

  const loadData = async () => {
    fetch("eventuserstatus/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((body) => {
        setUserstatus(body.userstatus);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1>PHASE 1</h1>
        <br />
        <div>{userstatus.registeredCount}</div>
      </div>
    </div>
  );
}
