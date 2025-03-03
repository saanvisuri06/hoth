import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { ref, set, get, child } from "firebase/database";
import { useNavigate, Link } from "react-router-dom"; 
import { CiUser, CiLock } from "react-icons/ci";

const LoginPage = ({CiUser, CiLock}) => {
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

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password);    
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <div class="flex justify-center items-center h-screen bg-purple-300">
        <div class="w-96 p-6 shadow-1g bg-white rounded-md">
          <h1 class= "text-3xl block text-center font-semibold">Welcome!</h1>
          <form onSubmit={handleLogin}>
          <div className="form-control mt-4">
            <div className="flex items-center">
              <label for="email" class="block text-base mb-2">Email </label>
              <CiUser className = "text-xl mr-2"/>
            </div>
              
            <input id="email" 
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="form-control mt-4">
            <div className="flex items-center">
              <label for="password" class="block text-base mb-2">Password</label>
              <CiLock className = "text-xl mr-2"/>
            </div>

              <input id="password"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
          </div>

          <div className="flex justify-center mt-4">
            <button className="px-10 py-2 text-xl rounded-md bg-purple-700 text-white" type="submit">Login</button>
          </div>
          </form>
          {error && <p>{error}</p>} {/* Display error if login fails */}
          <div className="flex items-center">
            <p class="whitespace-break-spaces">Don't have an account with us? </p>
            <Link to="/signup"><p class="underline">Register now!</p></Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
