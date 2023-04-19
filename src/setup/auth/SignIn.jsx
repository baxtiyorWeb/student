// const SignIn = () => {
// 	const [error, setError] = React.useState("")
// 	const [password, setPassword] = React.useState("")
// 	const [email, setEmail] = React.useState("")
// 	const signIn = (e) => {
// 		e.preventDefault()
// 		const logInWithEmailAndPassword = async (email, password) => {
// 			try {
// 				await signInWithEmailAndPassword(auth, email, password);
// 			} catch (err) {
// 				console.error(err);
// 				alert(err.message);
// 			}
// 		};
// 	};
// 	return (      <>
// 		{error ? <div>{error}</div> : null}
// 		<form onSubmit={signIn}>
// 		<input
// 		type="text"
// 		name="email"
// 		value={email}
// 		placeholder="Your Email"
// 		onChange={(e) => setEmail(e.target.value)}
// 		/>
// 		<input
// 		type="password"
// 		name="password"
// 		value={password}
// 		placeholder="Your Password"
// 		onChange={(e) => setPassword(e.target.value)}
// 		/>
// 		<input type="submit" value="submit" />
// 		<Link to="/register">sign up</Link>
// 		</form>
// 		</>
// 		);
// };

// export default SignIn;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  googleProvider,
} from "../auth/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/login");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default SignIn;