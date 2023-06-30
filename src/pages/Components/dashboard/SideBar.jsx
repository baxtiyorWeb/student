import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/Component.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../setup/auth/firebase/firebase";

const Sidebar = ({ toggle }) => {

  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      // navigatee("/home");
      console.log(user.email)
    }
  }, [user, loading]);


  return (
    <div className={!toggle ? "side-bar" : "side-bar-hide"}>
      <div className="container">
        <div className="navigation">
          <Link className="side-bar-link" to="/home">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </Link>
          <Link className="side-bar-link" to="/posts">
            <i className="fa-solid fa-pen-to-square"></i>
            <span>Posts</span>
          </Link>
          <Link className="side-bar-link" to="/live-stream">
            <i className="fa-brands fa-youtube"></i>
            <span> Live stream</span>
          </Link>
          <Link className="side-bar-link" to="/lessons">
            <i className="fa-solid fa-chalkboard"></i>
            <span>Lessons</span>
          </Link>
          <Link className="side-bar-link" to="/account">
            <i className="fa-regular fa-envelope"></i>
            <span>Account</span>
          </Link>
          <Link className="side-bar-link" to="/new-lessons">
            <i className="bx bx-chalkboard"></i>
            <span> new lessons</span>
          </Link>
          <Link className="side-bar-link" to="/new-group">
            <i className="fas fa-regular fa-user-group"></i>
            <span>new group</span>
          </Link>
          <Link className="side-bar-link" to="/new-content">
            <i className="fas fa-regular fa-blog"></i>
            <span>new content</span>
          </Link>
          <Link className="side-bar-link" to="/settings">
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </Link>
          <Link className="side-bar-link" to="/history">
            <i className="fas fa-regular fa-clock-rotate-left"></i>
            <span>History</span>
          </Link>
          <Link className="side-bar-link" to={user ? "/settings" : "/register "}>
            <i className={user ? "fas fa-user" : "fas fa-solid fa-right-to-bracket"}></i>
            <span>{user ? user.email.split("", 25) : "login"} <b> . . .</b></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
