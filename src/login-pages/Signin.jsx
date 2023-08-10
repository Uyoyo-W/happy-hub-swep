import '../login-styles/App.css'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";

function Signin() {

  return (
    <div className='App'>
      <div className='form-container'>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className='hidden'>Happyhub</h1>
        <h1 className='login-header'>Login</h1>
        <form>
          <input placeholder='Email' type='email' name='email' className='mail'></input>
          <input placeholder='Password' type='password' name="password" className='pass'></input>
          <button className='forgot-btn'>Forgot Password?</button>
          <button className='sign-in-btn'><Link to="/Signup" className='decor'>Sign In</Link></button>
          <h4 className='sign-up'>Don&apos;t have an Account?<button><Link to="/Signup" className='decor'>Sign Up For Free</Link></button></h4>
        </form>
      </div>
    </div>
  )
}

export default Signin
