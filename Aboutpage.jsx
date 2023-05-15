import React from 'react'
import {Link} from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div className='hacpage'>
        <h1>Aboute  Page </h1>
        <p> Bhaiya ji Namaste </p>
        <Link to='/'>Go back Home Page</Link>
    </div>
  )
}

export default Aboutpage