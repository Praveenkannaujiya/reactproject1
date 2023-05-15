import React from 'react'
import {useLocation} from 'react-router-dom'
import {ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Ankit = () => {
  const location=useLocation()
  toast.success(`SuccessFully Submit Form Dear ${location.state.email} ` ,{position:"top-center"})
  
  console.log(location)
  return (
    <div>
        <h1>Hello Dear {location.state.email} and Your Password is == {location.state.password}</h1>
        

        <ToastContainer/>
    </div>
  )
}

export default Ankit