import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [caption, setCaption] = useState(""); 
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    if (imageUpload == null || caption.trim() === "") {
      alert("Please select an image and enter a caption!");
      return;
    }

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        alert("Image Uploaded!");
        getDownloadURL(snapshot.ref).then((url)=> {
            setImageUrls((prev) => [...prev, url]);
        })
      });
    });
  };

  const firstButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  useEffect(() => {
    if(firstButtonRef.current) {
        setButtonWidth(firstButtonRef.current.offsetWidth);
    }
  }, []);

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Add Your Photo and Caption Here!
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        <input
          type="text"
          placeholder="Enter a caption..."
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        <button
          onClick={uploadFile}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Upload Image
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageUrls.map((image, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={image.url}
              alt={`Uploaded ${index}`}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-gray-700 mt-2">{image.caption}</p>
            <Link
              to="/home"
              className="mt-2 bg-purple-600 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Post
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
