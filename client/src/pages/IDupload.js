import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const IDupload = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs]= useState([]);
    useEffect(()=>{
        if(images.length<1) return;
        const newImageURLs = [];
        images.forEach(image=> newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images]);

    function onImageChange(e){
        setImages([...e.target.files]);
    }
    console.log(imageURLs)
  return (
    <>
        <div className='py-12 px-6 bg-Ablack h-full'>
        <input type='file' accept='image/*' onChange={onImageChange} className='flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato"'/>
        {imageURLs.map(imageSrc=><div>
            <img src={imageSrc} className='h-1/5 w-1/5 flex justify-between mx-auto border-2 border-black'/>
            <button
            onClick={(e) => {
              navigate("/")
            }}
            className="flex justify-between mx-auto text-black bg-white py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg border-black border-2 font-semibold font-lato"
          >
            Verify
          </button>
            </div>)}
        </div>
        
    </>
  )
}

export default IDupload
