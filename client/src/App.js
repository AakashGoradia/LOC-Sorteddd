import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import OtpVerify from './pages/OtpVerify';
import Signup from './pages/Signup/Signup';
import Otp from './pages/Otp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import DashBoard from './DashBoard';
import { Ecommerce } from './pages';
import UploadDocs from './pages/UploadDocs/UploadDocs';

const App=()=> {
  
  const [aadhars,setAadhars] = useState("");
  return (
    <>
      <BrowserRouter>
      <Routes>
      {/* <Navbar/> */}
      {/* <Landing/> */}
      {/* <OtpVerify /> */}
      {/* <Signup setAadhars={setAadhars} /> */}
      {/* <Otp aadhars = {aadhars} /> */}
      <Route path="/" element={(<Landing />)}/>
      <Route path="/dashboard" element={(<Ecommerce />)} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
