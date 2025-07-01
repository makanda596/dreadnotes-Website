import { useState } from "react"
import { userAuthStore } from "../../utilis/user"

const Login = () => {
  const {email,setEmail}=useState("")
  const {password,setPassword}=useState("")
  const {login}=userAuthStore()

  axios.default.WithCredetials =true,

  const LoginFuction = async (e) =>{
    e.preventDefault()
    try {
      await login(email,password)
      window.location.href ='/home';
    } catch (error) {
      console.log(error.response ? error.response.data.message : 'Login failed');

    }
  }
  return (
    <div>
      <div>
      <input type="text" onChange={(e) =>setEmail(e.target.value)} placeholder="enter your email" />
      <password type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="password"/>
        <button onClick={LoginFuction}>Login</button>
      </div>
    </div>
  )
}

export default Login