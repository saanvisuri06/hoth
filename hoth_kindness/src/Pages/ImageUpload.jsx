import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { auth, storage } from "../firebase-config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");
  const user = auth.currentUser ? auth.currentUser.email : "";

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("Image Uploaded!")
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
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
        
        <Link to="/home"><button
          onClick={uploadFile}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Upload Image
        </button></Link>
      </div>


    </div>
  );
};

export default ImageUpload;
