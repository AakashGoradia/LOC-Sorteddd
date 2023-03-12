import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import FaceCapture from './pages/FaceCapture'
import { Route, Routes } from 'react-router';
import IDupload from './pages/IDupload';
import OtpVerify from './pages/OtpVerify';
import Signup from './pages/Signup/Signup';
import Otp from './pages/Otp';
import React, { useState } from "react";
import DashBoard from './DashBoard';

const App=()=> {
  
  const [aadhars,setAadhars] = useState("");
  return (
    <>
      {/* <Navbar/> */}
      {/* <Landing/> */}
      {/* <FaceCapture/> */}
      <Routes>
        <Route path='/face' element={<FaceCapture/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/id' element={<IDupload/>}/>
      </Routes>

      {/* <OtpVerify /> */}
      {/* <Signup setAadhars={setAadhars} /> */}
      {/* <Otp aadhars = {aadhars} /> */}
      {/* <DashBoard /> */}

    </>
  );
}

export default App;
