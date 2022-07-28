import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { clearFlush, getallgroups, makeGroups } from "../../Services/apis";
import { JsonToTable } from "react-json-to-table";
function TableScreen() {
  const [groupData, setGP] = useState([]);
  useEffect(() => {
    getallgroups((res) => {
      setGP(res);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <JsonToTable json={groupData} />
      </div>
    </div>
  );
}

export default TableScreen;
