import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  clearFlush,
  getallgroups,
  getallgroupsFilter,
  makeGroups,
} from "../../Services/apis";
import { JsonToTable } from "react-json-to-table";
function TableGpScreen() {
  const [groupData, setGP] = useState([]);
  useEffect(() => {
    getallgroupsFilter((res) => {
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

export default TableGpScreen;
