import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from "react-router-dom"; 
import { CiUser, CiLock } from "react-icons/ci";

const LoginPage = ({CiUser, CiLock}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      // Once login is successful, the `useEffect` will handle the redirection
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <div class="flex justify-center items-center h-screen bg-indigo-600">
      <div class="w-96 p-6 shadow-1g bg-white rounded-md">
      <h1 class= "text-3x1 block text-center font-semibold">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label for="email" class="block text-base mb-2">Email </label>
          <CiUser />
          <input id="email" 
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          />
        </div>

        <div className="form-control">
          <label for="password" class="block text-base mb-2">Password</label>
          <CiLock />
          <input id="password"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
        </div>
        <div>
          <button className="px-10 py-2 text-2x1 rounded-md bg-black text-white" type="submit">Login</button>
        </div>
      </form>
      {error && <p>{error}</p>} {/* Display error if login fails */}
      <Link to="/signup"><p>Don't have an account with us? Create a new account!</p></Link>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
