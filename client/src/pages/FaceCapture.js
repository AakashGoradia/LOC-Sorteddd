// I have captured an image using webcam using react-webcam library, now i want the captured image to be converted into an image URL that i can send to a model, how do i do that, here is my code
// import React, { useState } from 'react'
// import Webcam from 'react-webcam'
// import {useNavigate} from "react-router-dom"

// const WebcamComponent = () => <Webcam />

// const videoConstraints = {
//   width: 400,
//   height: 400,
//   facingMode: 'user',
// }
// const FaceCapture = () => {
//     const navigate = useNavigate();
//   const [picture, setPicture] = useState('')
//   const webcamRef = React.useRef(null)
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot()
//     setPicture(pictureSrc)
//   })

//   const imageFile = picture

    
//     const reader = new FileReader();
//     reader.readAsDataURL(imageFile);
//     reader.addEventListener('load', () => {console.log(reader.result);});
    
//   return (
//     <>
//     <div className='bg-Ablack m-0'>
//       <h2 className="my-8 mb-5 text-center text-3xl font-lato font-bold text-white">
//         Capturing Your Image for Verification
//       </h2>
//       <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
//       <div className='border-2 border-black'>
//         {picture == '' ? (
//           <Webcam
//             audio={false}
//             height={400}
//             ref={webcamRef}
//             width={400}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//           />
//         ) : (
//           <img src={picture} />
//         )}
//       </div>
//       {/* <div>
//         <img src={picture} alt=''/>
//       </div> */}
//     </section>
      
//       <div>
//         {picture != '' ? (
//           <button
//             onClick={(e) => {
//               navigate("/id")
//             }}
//             className="flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato"
//           >
//             Next: ID Upload -
//           </button>
//         ) : (
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               capture()
//             }}
//             className="flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato"
//           >
//             Capture
//           </button>
//         )}
//       </div>
//     </div>
//     </>

//   )
// }
// export default FaceCapture
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
};

const FaceCapture = () => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState('');
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  const handleNext = (e) => {
    e.preventDefault();
    const imageURL = URL.createObjectURL(dataURItoBlob(picture));
    navigate('/id');
    console.log(imageURL)
    fetch('/upload', {
      method: 'POST',
      body: picture
    })
    .then(response => response.json())
    .then((response) => {
      // handle response from Flask
      var res = response.data
      console.log(res)
    })
    .catch(error => console.error(error));

  };

  const dataURItoBlob = (dataURI) => {
    // convert base64 to raw binary data held in a string
    const byteString = atob(dataURI.split(',')[1]);
    // separate the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // create a Blob object from the ArrayBuffer
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className='bg-Ablack m-0'>
      <h2 className='my-8 mb-5 text-center text-3xl font-lato font-bold text-white'>
        Capturing Your Image for Verification
      </h2>
      <section class='hero container max-w-screen-lg mx-auto pb-10 flex justify-center'>
        <div className='border-2 border-black'>
          {picture === '' ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat='image/jpeg'
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
        </div>
      </section>

      <div>
        {picture !== '' ? (
          <button
            onClick={handleNext}
            className='flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato'
          >
            Next: ID Upload -
          </button>
        ) : (
          <button
            onClick={capture}
            className='flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato'
          >
            Capture
          </button>
        )}
        {/* <div>
          {res ? (
            <div className='text-3xl font-lato font-bold'>
              Congratulations, You are verified
            </div>
          ):"Not Verified"}
        </div> */}
      </div>
    </div>
  );
};

export default FaceCapture;
