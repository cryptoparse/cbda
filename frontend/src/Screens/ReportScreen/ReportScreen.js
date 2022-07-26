import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./style.css";
import ProgressBar from "react-bootstrap/ProgressBar";
export default function ReportScreen() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div className="print__section">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <div ref={componentRef} className="card">
              <div class="float__start">
                <h3 class="card-title mb-0 ">Information</h3>
              </div>
              <hr />
              <div class="float__infoss">
                <ul>
                  <li>
                    {" "}
                    Name : <span> Dr Andrew C S Koh </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Email : <span> Andrew@gmail.com </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Group No: <span> 1 </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Total Group Score :{" "}
                    <span>
                      {" "}
                      <ProgressBar animated now={45} />
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Logical Understanding: <span> </span> 9856231456{" "}
                  </li>
                  <li>
                    {" "}
                    Excel Knowledge :{" "}
                    <span>
                      {" "}
                      26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Mathematical Index : <span> www.Andrew.com </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Analytical Skills : <span> United states </span>{" "}
                  </li>
                </ul>
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
            Print{" "}
          </button>
        </div>
      </div>
    </>
  );
}
