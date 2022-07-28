import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import qr from "../../assets/images/resultqr.png";

export default function ResultQRScreen() {
  return (
    <div>
      <div className="d-grid gap-2">
        <img src={qr} alt="Check QR on Screen" />
      </div>
    </div>
  );
}
