import styles from "../App.module.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({user, setUser}) {
  console.log("");
  const url ="https://course-project-codesquad-comics-server.onrender.com/logout";
  const navigate = useNavigate;
  const handleLogOut = () => {
    fetch(url, {method: "POST"})
    .then(response => console.log(response))
    .then(setUser({}))
    .then(localStorage.removeItem("user"))
    .then(navigate("/"))
    .catch(error => console.log(error))
    .catch(navigate("/admin"))
  }
    return (
      <div>
        <header>
            <nav className={styles.nav}>
            <div>
                <a href="#"><img src="./images/CodeSquad-Comics-logo.jpg" alt="CodeSquad Comics"/></a>
                </div>
                <div className={styles.navspace}>
                <div>
                <Link to="/home">HOME </Link>
                </div>
                <div>
                <Link to="/about">ABOUT</Link>
                </div>
                <div>
                  <Link to="/admin">ADMIN</Link>
                </div>
                <div>
                {user.username ? (
                  <a href="#" onClick={handleLogOut}>LOGOUT</a>
                  ) : (
                  <Link to="/login">LOGIN</Link>
                  )}
                </div>
                </div>
                <div className="mobnav">
                <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
      </div>
    )
  }

export default Header; 