import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./style.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { getResult } from "../../Services/apis";
import logo from "../../assets/images/CBDA_logo_png.png";
export default function ReportScreen() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [report, setReport] = useState({
    email: "",
    name: "",
    group: "",
    filter: {
      filter1: "",
      filter2: "",
      filter3: "",
    },
    score: {
      id: "",
      totalscore: "",
      logicalscore: "",
      excelscore: "",
      mathscore: "",
      analyticalscore: "",
    },
  });
  useEffect(() => {
    getResult((res) => {
      setReport(res.result);
    });
  }, []);
  return (
    <>
      <div className="print__section">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <div ref={componentRef} className="card">
              <div className="row">
                <div className="float__start m-3 col-md-8">
                  <h3 className="card-title mb-0 ">Group Analysis Report</h3>
                  <hr />
                  <label>Email ID : {report.email}</label>
                  <br />
                  <label>Name: {report.name}</label>
                  <br />
                  <label>Group: {report.group}</label>
                  <br />
                </div>
                <div className="col-md-3">
                  <img
                    src={logo}
                    alt="Centre For Business Data Analytics"
                    width={150}
                  />
                </div>
              </div>
              <hr />
              <div className="float__infoss  m-3">
                <div>
                  <label>
                    Grouping Filters : {report.filter.filter1},{" "}
                    {report.filter.filter2}, {report.filter.filter3}
                  </label>
                  <hr />
                  <br />
                  <br />
                  <br />
                </div>
                <label>Total Score</label>
                <br />
                <ProgressBar
                  label={`${report.score.totalscore}%`}
                  now={report.score.totalscore}
                  animated
                />
                <br />
                <label>Logical Reasoning</label>
                <br />
                <ProgressBar
                  animated
                  label={`${report.score.logicalscore}%`}
                  now={report.score.logicalscore}
                />
                <br />
                <label>Excel Knowledge</label>
                <br />
                <ProgressBar
                  animated
                  label={`${report.score.excelscore}%`}
                  now={report.score.excelscore}
                />
                <br />
                <label>Mathematical Aptitude</label>
                <br />
                <ProgressBar
                  animated
                  label={`${report.score.mathscore}%`}
                  now={report.score.mathscore}
                />
                <br />
                <label>Analytical Understanding</label>
                <br />
                <ProgressBar
                  animated
                  label={`${report.score.analyticalscore}%`}
                  now={report.score.analyticalscore}
                />
                <br />
                <hr />
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row justify-content-center align-self-center">
          <button
            onClick={handlePrint}
            className="print__button, btn btn-primary"
          >
            {" "}
            PRINT / DOWNLOAD{" "}
          </button>
        </div>
      </div>
    </>
  );
}
