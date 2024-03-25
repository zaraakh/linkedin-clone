import React from 'react'
import "./Login.css"

function Login() {
    const logintoApp = () => {};
    const register = () => {};

  return (
    <div className='login'>
        <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'
        alt=''
      />
      <form>
        <input placeholder='Full name (required if registering)' type="text"/>
        <input placeholder='Profile pic URL (optional)' type="text"/>
        <input placeholder='Email' type="email"/>
        <input placeholder='Password' type="password"/>
        <button type='submit' onClick={logintoApp}>Sign In</button>
      </form>
      <p>Not a Member? {""}
      <span className='login__register' onClick={register}>
        Register Now</span>
        </p>
    </div>
  )
}

export default Login;
