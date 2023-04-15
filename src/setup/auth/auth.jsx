import { useState, useEffect } from "react";
import "../auth/firebase/Firebase.css";
import { db } from "../auth/firebase/firebase";
import { set, ref, onValue, remove } from "firebase/database";
import { Link } from "react-router-dom";
const Auth = () => {
  // write
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const uuid = Date.now();
  const writeData = (e) => {
    e.preventDefault();
    set(ref(db, `/${uuid}`), {
      todo: todo,
      uuid: uuid,
    });
    setTodo("");
  };
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };
  // read

  useEffect(() => {
    setTodos([]);
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  // update
  const updateDate = () => {
    const uuid = Date.now();
    set(ref(db, `${uuid}`), {
      todo,
      uuid,
    });
    setTodos("");
  };
  // delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };
  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <div onSubmit={writeData} className="form">
            <h1>Create Account</h1>
            <div class="social-container">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" id="username" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button id="signUp">Sign Up</button>
          </div>
        </div>
        <div class="form-container sign-in-container">
          <div className="form">
            <div class="social-container sclc">
              <i class="bx bxl-google-plus"></i>
              <i class="fas fa-google-plus-g"></i>
              <i class="fas fa-linkedin-in"></i>
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
