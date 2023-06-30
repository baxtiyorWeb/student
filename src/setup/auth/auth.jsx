import { useState } from "react";
import "../auth/firebase/Firebase.css";
import { auth, db } from "../auth/firebase/firebase";
import {
  addDoc, collection,
  // query, getDocs, where
} from "firebase/firestore";
import {
  Link, Navigate, useNavigate,
  //  useNavigate
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  //  googleProvider, 
  //  GoogleAuthProvider,
  //  signInWithPopup,  
} from 'firebase/auth';

const Auth = ({ userName, setUserName }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
        password
      });
      navigate("/login")
    } catch (err) {
      setError('')
      navigate("/login")
    }
  };

  // };
  return (
    <>

      <div className="login"
        style={{
          "width": "100%",
          "height": "100vh",
        }}
      >

        <h2>Sign Up</h2>
        <div
          className="login__container"
          style={{
            "width": "100%",
            "height": "100%",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "flexDirection": "column"
          }}>
          {error ? <div>{error}</div> : null}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              "width": "50%",
              "borderRadius": 20,
              "outline": "none",
              "border": "none",
              "backgroundColor": "#212121",
              "textIndent": 10,
              "color": "#888",
              "padding": 13,
              "marginTop": 5,
              "marginBottom": 5
            }}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}

            style={{
              "width": "50%",
              "borderRadius": 20,
              "outline": "none",
              "border": "none",
              "backgroundColor": "#212121",
              "textIndent": 10,
              "color": "#888",
              "padding": 13
            }}
          />
          <button type="submit" onClick={() => registerWithEmailAndPassword(email, password)}

            style={{
              background: "linear-gradient(to right, purple, blue)",
              "cursor": "pointer",
              "border": "1px solid #111111",
              "marginTop": "10px",
              "marginBottom": "10px"
            }}

          >Submit</button>
          <p>
            already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
