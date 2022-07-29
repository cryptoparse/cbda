import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import StudentDetailsScreen from "./Screens/StudentDetailsScreen/StudentDetailsScreen";
import IceBreakerFormScreen from "./Screens/IceBreakerFormScreen/IceBreakerFormScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/images/CBDA_logo_png.png";
import ExcelAtExcelScreen from "./Screens/ExcelAtExcelScreen/ExcelAtExcelScreen";
import AdminPanelScreen from "./Screens/AdminPanelScreen/AdminPanelScreen";
import ReportScreen from "./Screens/ReportScreen/ReportScreen";
import WaitingScreen from "./Screens/WaitingScreen/WaitingScreen";
import ResultQRScreen from "./Screens/ResultQRScreen/ResultQRScreen";
import GroupScreen from "./Screens/GroupScreen/GroupScreen";
import TableScreen from "./Screens/TableScreen/TableScreen";
import ExcelAtExcelDisplayScreen from "./Screens/ExcelAtExcelDisplayScreen/ExcelAtExcelDisplayScreen";
import TableResScreen from "./Screens/TableResScreen/TableResScreen";
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <img src={logo} alt="CBDA - Center for Business Data Analytics" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route
                path="studentRegister"
                element={<StudentDetailsScreen />}
              />
              <Route path="iceBreaker" element={<IceBreakerFormScreen />} />
              <Route path="groupReport" element={<ReportScreen />} />
              <Route path="excelAtExcel" element={<ExcelAtExcelScreen />} />
              <Route path="adminctrlpanel" element={<AdminPanelScreen />} />
              <Route path="waiting" element={<WaitingScreen />} />
              <Route path="resultQR" element={<ResultQRScreen />} />
              <Route path="groupDisplay" element={<GroupScreen />} />
              <Route path="groupTable" element={<TableScreen />} />
              <Route path="excelAtExcelDisplay" element={<ExcelAtExcelDisplayScreen/>} />
              <Route path="allP2Result" element={<TableResScreen />} />
            </Routes>
          </BrowserRouter>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

const container = document.getElementById("app");

render(<App />, container);
