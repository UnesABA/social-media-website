import Login    from "./pages/login/Login"
import Register from "./pages/register/Register"
import Navbar   from "./components/navbar/Navbar"
import LeftBar  from "./components/leftbar/LeftBar"
import RightBar from "./components/rightbar/RightBar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
}               from "react-router-dom"
import "./index.css"

//This is our layout we can use it everywhere
const Layout = () =>{ 
  return (
    <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} />
            <Route path="profile/:id" element={<Profile />} /> */}
          </Route>
          <Route path= "/login"    element= {<Login />} />
          <Route path= "/register" element= {<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App