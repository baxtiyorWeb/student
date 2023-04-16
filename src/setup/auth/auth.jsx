import { useState, useEffect } from "react";
import "../auth/firebase/Firebase.css";
import { db } from "../auth/firebase/firebase";
import { set, ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
const Auth = () => {
  // write
  const [todos, setTodos] = useState([]);
  const uuid = Date.now();
  const writeData = (e) => {
    e.preventDefault();
    set(ref(db, `/${uuid}`), {
      todo: todos,
      uuid: uuid,
    });
  };
  // read

  useEffect(() => {
    setTodos([]);
    onValue(ref(db), (snapshot) => {
      let data = snapshot.val();
      if (data !== null) {
        Object.values(data).map(data  = (todo)=>{
            setTodos((oldArray) => [...oldArray, todo]);
        })
      }
    });
  }, []);
  // update
  // const updateDate = () => {
  //   const uuid = Date.now();
  //   set(ref(db, `${uuid}`), {
  //     todo,
  //     uuid,
  //   });
  //   setTodos(todo);
  // };
  // delete
  // const handleDelete = (todo) => {
  //   remove(ref(db, `/${todo.uuid}`));
  // };
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <div onSubmit={writeData} className="form">
            <h1>Create Account</h1>
            <div className="social-container">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" id="username" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button id="signUp">Sign Up</button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="form">
            <div className="social-container sclc">
              <i className="bx bxl-google-plus"></i>
              <i className="fas fa-google-plus-g"></i>
              <i className="fas fa-linkedin-in"></i>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Email" id="namesignIn" />
            <input type="email" placeholder="Email" id="emailsignIn" />
            <input type="password" placeholder="Password" id="passwordsignin" />
            <Link to="/email">Forgot your password?</Link>
            <button id="signIn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
