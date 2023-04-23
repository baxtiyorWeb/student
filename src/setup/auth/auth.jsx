import { useState } from "react";
import "../auth/firebase/Firebase.css";
import {auth,  db  } from "../auth/firebase/firebase";
import { addDoc, collection  , 
  // query, getDocs, where
} from "firebase/firestore";
import { Link,
  //  useNavigate
   } from "react-router-dom";
import {  
  createUserWithEmailAndPassword ,
//  googleProvider, 
//  GoogleAuthProvider,
//  signInWithPopup,  
 } from 'firebase/auth';

const Auth = () => {
  // const navigate = useNavigate();

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
  } catch (err) {
    console.error(err);
    alert(err.message);
    setError('')
  }
};

  // };
  return (
    <>

    <h2>Sign Up</h2>
    <div>
    {error ? <div>{error}</div> : null}
    <input
    type="email"
    name="email"
    value={email}
    placeholder="Your Email"
    required
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="password"
    name="password"
    value={password}
    placeholder="Your Password"
    required
    onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit" onClick={()=> registerWithEmailAndPassword(email, password)}>Submit</button>
    <p>
    already registered? <Link to="/login">Login</Link>
    </p>
    </div>
    </>
    );
};

export default Auth;
