import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import{useNavigate} from 'react-router-dom'


const LoginForm = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const  navi = useNavigate()
  
    const submithandeler=(e)=>{
        e.preventDefault()
  
        navi('/ankit', {state:{email:email, password:password}})
    }
     

  return (
    <div className='hacpage'>

        <h1>LoginForm</h1>
       
        <form  onSubmit={submithandeler}>
        <div>
        <label htmlFor="email"  >Email Id </label>
      
        <br />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        

        </div>
        <div>
            <br />
        <label htmlFor="password">Password</label>

        <br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}  />

        </div>
        <br />
        <Button type='submit' >Submit</Button>
        </form>
    

  
    </div>
  )
}

export default LoginForm