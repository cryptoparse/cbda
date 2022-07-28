import React, { useEffect, useState } from "react";
import { clearFlush, getallgroups, makeGroups } from "../../Services/apis";
import "bootstrap/dist/css/bootstrap.css";

export default function AdminPanelScreen() {
  const [userstatus, setUserstatus] = useState({});
  const results = [];
  const [groupData, setGroupData] = useState([]);
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });
  const loadData = async () => {
    fetch("/eventuserstatus/", {
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
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const clearAllAction = (e) => {
    clearFlush(() => {
      window.location.href = "/";
    }, inputField);
  };
  const makeGroupsAction = async (e) => {
    makeGroups(() => {});
    getallgroups((res) => {
      setGroupData(res);
    }).then(() => {
      console.log(groupData[0]);
    });
  };

  const TabRow = (data, key) => {
    return (
      <tr key={key}>
        <td>{data.email}</td>
        <td>{data.group}</td>
        <td>{data.filter1}</td>
        <td>{data.filter2}</td>
        <td>{data.filter3}</td>
      </tr>
    );
  };
  const Table = (props) => (
    <div>
      <p>Your Table</p>
      <table>
        <tbody>
          {groupData.map((x, i) => (
            <TabRow key={i} data={x} />
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="container">
        <h1>PHASE 1</h1>
        <br />
        <div className="row">
          Total Registered Users - {userstatus.registeredCount}
        </div>
        <br />
        <br />
        <div className="row">
          <br />
          <div className="p-2 border-bottom">
            <h1>Clear Data (reset)</h1>
            <form onSubmit={clearAllAction}>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Admin Username"
                className="form-control"
                onChange={inputsHandler}
              />
              <br />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Admin Password"
                className="form-control"
                onChange={inputsHandler}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                DELETE DATA
              </button>
            </form>
          </div>
        </div>
        <div className="row p-2 border-bottom">
          <h1>Make Groups</h1>
          <br />
          <div>
            <button className="btn btn-primary" onClick={makeGroupsAction}>
              Generate
            </button>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}
