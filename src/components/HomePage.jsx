import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
    
  
    return (
    <div>
        <h3>Welcome to FitUp </h3>
        <Link to={'/Login'}><button >login</button></Link>
        <Link to={'/SignUp'}><button onClick={console.log(props.users)} >sign up</button></Link>

    </div>
  )
}
