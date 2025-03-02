import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom"; // To navigate after login

const LoginPage = () => {
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

    return () => unsubscribe(); // Clean up the subscription
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Once login is successful, the `useEffect` will handle the redirection
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>} {/* Display error if login fails */}
    </div>
  );
};

export default LoginPage;
