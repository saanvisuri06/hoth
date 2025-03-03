import React, { useRef, useEffect, useState } from 'react';
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

  const dashboardData = [
    { title : 'HRHR', value: "1234"},
    { title : 'rrrrr', value: "1231231"},
    { title : 'wswww', value: "12123123"},
    { title : 'ppppp', value: "8987"},
  ];
  const hashtags = ['Metoo', 'Tech', 'Innovation', 'React', 'Frontend'];
  const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await signOut(auth); // Sign out the user
        console.log("User signed out");
        navigate("/"); // Redirect to login page after logout
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    const firstButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    if (firstButtonRef.current) {
      setButtonWidth(firstButtonRef.current.offsetWidth);
    }
  }, []);

  return (
    
    <div className = "bg-purple-200 font-itim min-h-screen">
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
            <div className="group flex items-center space-x-4">
            {/* First div: Visible always, with hover effect */}
              <div className="mt-1 block text-2xl leading-tight font-medium text-black hover:underline">
                Today's Challenge
              </div>
  
            {/* Second div: Hidden by default, visible when the first div is hovered */}
              <div className="self-end mt-1 block leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Click below to see today's posts
              </div>
            </div>
            <Link to={`/tag/bruh`}>
            <div className='bg-white p-4 rounded-full mt-2 text-2xl'>
                {<><Hashtag tag = "chalkUp" bgColor = 'bg-white' textColor='' textSize='text-3xl'/>: Leave uplifting notes on the sidewalk with a chalk </>}
            </div>
            </Link>
            <div className='flex justify-center mt-5'>
              <button className="bg-black text-white text-sm p-2 rounded-full hover:bg-gray-800">
              {<Link to="/ImageUpload"><p >Add your photo for today!</p></Link>}
              </button>
            </div>

        <div className="text-2xl font-bold text-black pb-5 pt-5">Past Posts by you</div>
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
              <button style={{ width: buttonWidth }} onClick={handleLogout} className="bg-black text-white text-md p-2 rounded-full hover:bg-gray-800">
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