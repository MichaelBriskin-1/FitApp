import React from 'react'

export default function Login() {
  return (
    <div>
        <input type="email" placeholder='enter your email'/>
        <input type="password" placeholder='enter your password'/>
        <button onClick={props.handleLogin()}>enter</button>
    </div>
  )
}
