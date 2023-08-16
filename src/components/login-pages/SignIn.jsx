import logo from '../login-assets/Logo.svg';
import { Link } from "react-router-dom";
import '../login-styles/SignIn.scss'



function SignIn() {

  return (
    <div className='sign-in'>
      <div className='form-container'>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className='login-header'>Log In</h1>
        <form>
          <input placeholder='Email' type='email' name='email' className='input mail'></input>
          <input placeholder='Password' type='password' name="password" className='input pass'></input>
          <button className='forgot-btn'>Forgot Password?</button>
          <Link to="/sign-up"><button className='sign-in-btn'>Sign In</button></Link>
        </form>
        <h4 className='sign-up'>Don&apos;t have an account?<Link to="/Signup" className='decor'>Sign up for free</Link></h4>

      </div>
    </div>
  )
}

export default SignIn
