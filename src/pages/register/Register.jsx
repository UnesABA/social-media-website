import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className= "register">
      <div className="card">
        <div className="left">
          <h1>Younes Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Do you have an account ?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>register</h1>
          <form>
            <input placeholder= "Username" type="text" />
            <input placeholder= "email" type="email" />
            <input placeholder= "Password" type="password" />
            <input placeholder= "Name" type="text" />
            <Link to= "/login">
              <button>register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register