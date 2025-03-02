import React, {useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({CiUser, CiLock}) => {
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

    const handleSignup = async (e) => {
        e.preventDefault(); 
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
          setError("Invalid credentials. Please try again.");
        }
    };

  return (
    <div>
        <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={handleSignup}> Create User</button>
      </div>
    </div>
  )
}

export default Signup