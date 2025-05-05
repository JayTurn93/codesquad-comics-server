import { useState } from "react";
import styles from "../App.module.css"
import { useNavigate } from "react-router-dom";

function Signup({user, setUser}) {
    const navigate = useNavigate();
    console.log(user);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const url ="https://course-project-codesquad-comics-server.onrender.com/signup";
    const handleFirstNameChange = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        console.log("Fname changes >>>", firstName);
      }
      const handleLastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
        console.log("Lname changes >>>", lastName);
      }
      const handleUserChange = (e) => {
        e.preventDefault()
        setUser(e.target.value) //shows not a function, UPDATE: fixed by adding value property to App.jsx
        console.log("user changes >>>", user);
    }
    const handlePasswordChange = (e) => {
      e.preventDefault()
      setPassword(e.target.value)
      console.log("pass changes >>>", password);
    }

    const handleSubmitSignup = (e) => {
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
      console.log("trying to",user, password, firstName, lastName);
      
    }
    

    return (
      <div>
        <main className={styles.twotone}>
            <div className={styles.container}>
                <h1>SIGN UP</h1>
                <form onSubmit={handleSubmitSignup} className={styles.cform}>
                    <div className={styles.createcenter}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" value={firstName}  onChange={handleFirstNameChange} />
                    </div>
                    <div className={styles.createcenter}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div className={styles.createcenter}>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" id="email" placeholder="Email" value={user} onChange={handleUserChange}    />
                    </div> <br />
                    <div className={styles.createcenter}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handlePasswordChange}/>
                    </div>
                </form>
                <div className={styles.loginbutton}>
                  <input type="submit" />
                </div>
            </div>
        </main>
      </div>
    )
  }

export default Signup; 