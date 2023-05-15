import React from 'react'
import {Link,useLocation} from 'react-router-dom'
const Homepage = () => {
  
  const location = useLocation()
  console.log(location.state)
  return (
    <div className='hacpage'>
        <h1>Home Page </h1>
        <p>hello Dear Praveen kannaujiya myId </p>
        <Link to='/contact'>Contact</Link>
        <br/>
       
    </div>
  )
}

export default Homepage