import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
const Button = () => {
   return (
      <div>
         <button className='btn--back' > <Link to='/'><FaArrowLeft />Back </Link></button>
      </div>
   )
}

export default Button