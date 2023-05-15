import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter ,Route,Routes, Navigate } from 'react-router-dom'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Contact from './Contact'
import LoginForm from './LoginForm'
import Ankit from './Ankit'

const Form = () => {
  return (
    <div>
     <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/contact/' element={<Contact/>}/>
          <Route path='/ankit' element={<Ankit/>}/>

          <Route path='/*' element={<Navigate to  ='/about'/>}/>
         
          <Route path='login' element={<LoginForm/>}/>
          
        </Routes>
     </BrowserRouter>
        
       
    </div>
  )
}

export default Form