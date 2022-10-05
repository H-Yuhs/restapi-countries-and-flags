import React from 'react'
import { useReduce } from '../hooks/useReduce'
import { HiOutlineMoon } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const { mode, dispatch } = useReduce()
   const switchMode = () => {
      document.querySelector('body').classList.toggle('dark')
   }
   return (

      <div className='navbar'>
         <h2 ><Link to={'/'}>Where in the world?</Link></h2>

         <button className='btn btn--switch' onClick={() => {
            switchMode()
            dispatch({ type: 'TOGGLE_MODE' })
         }} >
            <HiOutlineMoon />  {mode.lightMode ? 'Dark Mode' : 'Light Mode'}</button>
      </div>
   )
}

export default Navbar