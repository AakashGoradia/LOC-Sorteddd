import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import OtpVerify from './pages/OtpVerify';
import Signup from './pages/Signup/Signup';
import Otp from './pages/Otp';
import React, { useState } from "react";

const App=()=> {
  
  const [aadhars,setAadhars] = useState("");
  return (
    <>
      <Navbar/>
      {/* <Landing/> */}
      {/* <OtpVerify /> */}
      <Signup setAadhars={setAadhars} />
      {/* <Otp aadhars = {aadhars} /> */}
    </>
  );
}

export default App;
