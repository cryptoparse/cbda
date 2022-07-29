import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { clearFlush, getallgroups, getAllResult, makeGroups } from "../../Services/apis";
import { JsonToTable } from "react-json-to-table";
function TableResScreen() {
  const [groupData, setGP] = useState([]);
  useEffect(() => {
    getAllResult((res) => {
      setGP(res);
      console.log(res)
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

export default TableResScreen;
