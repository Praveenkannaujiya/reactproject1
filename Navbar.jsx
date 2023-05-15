import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    
    <ul className='nvbar'>

    <li ><NavLink className='navlink'  to='/'> Home </NavLink></li>
    <li><NavLink className='navlink'  to='/about'> About </NavLink></li>
    <li><NavLink  className='navlink' to='/contact'> Contact </NavLink></li>
    <li><NavLink  className='navlink' to='/login'> Login </NavLink></li>
    <li><NavLink  className='navlink' to='/ankit'> Ankit </NavLink></li>
   
    

</ul>
   
   </div>

  )
}

export default Navbar