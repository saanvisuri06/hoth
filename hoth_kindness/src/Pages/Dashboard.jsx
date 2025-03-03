import React, {useState} from 'react'
import DashboardCard from './DashboardCard';
import Hashtag from './Hashtag';
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
import { useNavigate } from "react-router-dom"; // For navigating after logout

const Dashboard = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const dashboardData = [
    { title : 'HRHR', value: "1234"},
    { title : 'rrrrr', value: "1231231"},
    { title : 'wswww', value: "12123123"},
    { title : 'ppppp', value: "8987"},
  ];
  const hashtags = ['Metoo', 'Tech', 'Innovation', 'React', 'Frontend'];
  const navigate = useNavigate();

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
  
    const handleLogout = async () => {
      try {
        await signOut(auth); // Sign out the user
        console.log("User signed out");
        navigate("/"); // Redirect to login page after logout
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

  return (
    
    <div className = "bg-purple-300 font-itim">
      {/* Navigation Bar 
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <Link to = "/home" className="hover:text-blue-300">Home</Link>
              <Link to = "/" className="hover:text-blue-300">Login</Link>
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">Profile</a></li>
              <li><a href="#" className="hover:text-blue-300">Settings</a></li>
              <li><button onClick={handleLogout} className="hover:text-blue-300">Logout</button></li>
            </ul>
          </nav>
        </div>
      </div>*/}

      {/* Today's Challenge */}
      <div class="mx-auto w-full overflow-hidden rounded-xl">
        <div class="p-8 font-itim">
            <div class="text-4xl font-semibold tracking-wide text-left pb-5">Your Dashboard</div>
            <div class="mt-1 block text-2xl leading-tight font-medium text-black hover:underline">
                Today's Challenge
            </div>
            <div className='bg-white p-4 rounded-full mt-2'>
              <Hashtag tag = "bruh" bgColor = 'bg-white' textColor='' textSize='text-3xl'/>
            </div>
            <div className='flex justify-center mt-5'>
              <button className="bg-black text-white text-sm p-2 rounded-full hover:bg-gray-800">
                {<>Check out recent posts with <Hashtag tag = "bruh" />! </>}
              </button>
              
              <div className="App">
                <input
                   type="file"
                    onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}/>
                <button onClick={uploadFile}> Upload Image
                </button>{imageUrls.map((url) => {return <img src={url} />;
                  })}
              </div>
            </div>

        <div className="text-2xl font-bold text-black pb-5">Past Posts by you</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Dynamically render DashboardCard components */}
          {dashboardData.map((data, index) => {
            // Log the title and value to the console
            console.log(`Title: ${data.title}, Value: ${data.value}`);
            return (
            <DashboardCard 
              title={data.title} 
              value={data.value} 
              hashtags={hashtags}
            />
            );
          })}
        </div>
        <div className='flex justify-center mt-5'>
              <button onClick={handleLogout} className="bg-black text-white text-sm p-2 rounded-full hover:bg-gray-800">
                Logout
              </button>
            </div>
        </div>  
    </div>


      {/*<DashboardCard title={"Today's Challenge"} value={<>Give a phone call to your beloved ones! List <Hashtag tag = "bruh" /> with your post!</>}/>*/}

      
    </div>
  );
}

export default Dashboard;