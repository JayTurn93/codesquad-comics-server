import { useState } from "react"; // i also turned this off and im not sure if it makes a difference 
import styles from "../App.module.css"
import { useNavigate } from "react-router-dom";

function Login({user, setUser}) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const url = "https://course-project-codesquad-comics-server.onrender.com/login/local"
  console.log("logintest", user);
  const handleUserChange = (e) => {
    e.preventDefault()
    setUser(e.target.value) //shows not a function, UPDATE: fixed by adding value property to App.jsx
    // console.log("user changes >>>", user);
}
const handlePasswordChange = (e) => {
  e.preventDefault()
  setPassword(e.target.value)
  // console.log("pass changes >>>", password);
}
const handleSubmitLogin = (e) => {
  e.preventDefault()
  const body = {
    user: e.target.user,
    password: e.target.user
  }
  JSON.stringify(body)
  fetch(url, {method: "post"})
  .then(localStorage.setItem("user", JSON.stringify(user)))
  .then(console.log("going good"))
  .then(navigate("/admin"))
  console.log("trying to",user, password)
  .catch(console.error)
  
}


    return (
      <div>
        <main className={styles.twotone}>
            <div className={styles.container}>
            <h1>LOGIN</h1>
            <div className={styles.cform}>
              <form onSubmit={handleSubmitLogin}>
                <div className={styles.createcenter}>
                  <label htmlFor="email" >Email:</label>
                  <input type="email"  value={user} id="email" placeholder="Email" onChange={handleUserChange} />
                </div> <br />
                <div className={styles.createcenter}>
                  <label htmlFor="password" type="password" >Password:</label>
                  <input
                      type="password"
                      value={password}
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handlePasswordChange} />
                </div>
                <div className={styles.loginbutton}>
                  <input type="submit"  />
                </div>
              </form>
            </div>
            </div>
        </main>
      </div>
    )
  }

export default Login; 