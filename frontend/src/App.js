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
import { CookiesProvider } from "react-cookie";
export default function App() {
  return (
    <div>
      <CookiesProvider>
        <div className="container">
          <div className="row justify-content-center align-self-center">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route
                  path="studentRegister"
                  element={<StudentDetailsScreen />}
                />
                <Route path="iceBreaker" element={<IceBreakerFormScreen />} />

                <Route path="excelAtExcel" element={<ExcelAtExcelScreen />} />
                <Route path="adminctrlpanel" element={<AdminPanelScreen />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </CookiesProvider>
    </div>
  );
}

const container = document.getElementById("app");

render(<App />, container);
