import About from "./components/About"
import Admin from "./components/Admin"
import Create from "./components/Create"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Update from "./components/Update"
import Footer from "./shared/Footer"
import Header from "./shared/Header"
// import "./App.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  const [user, setUser] = useState ("");
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
