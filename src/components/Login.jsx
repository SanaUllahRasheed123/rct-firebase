import React, { useState } from 'react'
import { auth } from '../react-config';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState(null)

    const logIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            const loggedInUser = userCredential.user;
            setUser(loggedInUser);
        })

    }
  return (
    <div>
    <form onSubmit={logIn}>
        <h1>Log In</h1>
        <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Log In</button>

    </form>
    {user? (
        <p>Welcome,{user.email}</p>

    ):(
        <p> Your are not Login</p>
    )}
    </div>
  )
}
