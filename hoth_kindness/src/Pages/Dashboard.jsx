import React from 'react'
import DashboardCard from './DashboardCard';
import Hashtag from './Hashtag';
import { Link } from 'react-router-dom';

import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
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

  return (
    
    <>
      {/* Navigation Bar */}
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Dashboard</div>
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
      </div>
      <DashboardCard title={"Today's Challenge"} value={<>Give a phone call to your beloved ones! List <Hashtag tag = "bruh" /> with your post!</>}/>

      <div className="p-6">
        <div className="text-2xl font-bold text-indigo-500">Past Posts by you</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      </div>
    </>
  );
}

export default Dashboard;