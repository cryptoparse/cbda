import React from "react";
import "./WelcomeScreen.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

function WelcomeScreen() {
  let navigate = useNavigate();
  const startEvent=()=>{
   navigate('/studentRegister') 
  }
  return (
    <div>
      <div >
          
        
      
        <div className="d-flex flex-column bd-highlight mb-3">
        <button type="button " className="btn btn-lg " onClick={startEvent}>          
        BEGIN
        </button>
        </div>
      
        
        
        </div>
      </div>
    
  );
}

export default WelcomeScreen;
