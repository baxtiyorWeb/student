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
import {
  Link, useNavigate,
  //  useNavigate
} from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  // googleProvider,
} from "../auth/firebase/firebase";
import {
  // createUserWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
function SignIn() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigatee = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigatee("/home");
      console.log(user.email)
    }
  }, [user, loading]);
  return (
    <div className="login"

      style={{
        "width": "100%",
        "height": "100vh",
      }}
    >
      <div className="login__container" style={{
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column"
      }}>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          style={{
            "width": "50%",
            "borderRadius": 20,
            "outline": "none",
            "border": "none",
            "backgroundColor": "#212121",
            "textIndent": 10,
            "color": "#888"
          }}
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            "width": "50%",
            "borderRadius": 20,
            "outline": "none",
            "border": "none",
            "backgroundColor": "#212121",
            "textIndent": 10,
            "color": "#888"
          }}
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          <i className="bx bxl-google"></i> Login with Google
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
