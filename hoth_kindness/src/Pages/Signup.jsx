import React, {useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { ref, set, get, child } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({CiUser, CiLock}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Set the authenticated user's data in Realtime Database
    const saveUserData = (userId) => {
    const userRef = ref(db, "users/" + userId); // Ref to users/{uid}
    set(userRef, {
      challenge: "Leave uplifting notes on the sidewalk with chalk", 
      email: email,
    })
      .then(() => {
        console.log("User data saved to the database!");
      })
      .catch((error) => {
        console.error("Error writing to database:", error);
      });
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // If user is logged in, redirect to the home page
          navigate("/home"); 
        }
      });
  
      return () => unsubscribe(); 
    }, [navigate]);

    const handleSignup = async (e) => {
        e.preventDefault(); 
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
            if (user) {
                  // Save user data to the database after successful login
                  saveUserData(user.uid); // Save data using UID as the reference
            }
        } catch (err) {
          setError("Invalid credentials. Please try again.");
        }
    };

  return (
    <div>
        <div>
          <div class="flex justify-center items-center h-screen bg-purple-300">
            <div class="w-96 p-6 shadow-1g bg-white rounded-md">
            <h1 class= "text-3xl block text-center font-semibold">Sign Up</h1>
            <label for="email" class="block text-base mb-2">Email</label>
            <input
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          
            <label for="password" class="block text-base mb-2">Password</label>
            <input
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <div className="flex justify-center mt-4">
              <button className="px-10 py-2 text-xl rounded-md bg-black text-white" type="submit" onClick={handleSignup}> Create User</button>
            </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup