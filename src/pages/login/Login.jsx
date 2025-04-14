import "./login.scss"

const Login = () => {
  return (
    <div className= "login">
      <div className="card">
        <div className="left">
          <h1>Hello World </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account ?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input placeholder= "Username" type="text" />
            <input placeholder= "Password" type="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login