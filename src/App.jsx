import Login    from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}               from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/login"    element= {<Login />} />
          <Route path= "/register" element= {<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App