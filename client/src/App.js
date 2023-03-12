import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import FaceCapture from './pages/FaceCapture'
import { Route, Routes } from 'react-router';
import IDupload from './pages/IDupload';

const App=()=> {
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
    </>
  );
}

export default App;
