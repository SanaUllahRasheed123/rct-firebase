import React, { useState } from 'react'
import { auth } from '../react-config';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState("")

    const logIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const loggedInUser = userCredential.user;
            setUser(loggedInUser);
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
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
        <p> Your are not Login In</p>
    )}
    </div>
  )
}
