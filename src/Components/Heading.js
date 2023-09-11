import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import post from '../assets/postal.jpeg';

export const Heading = () => {
  return (
    <><nav className='flex bg-red-500 pt-5 pb-5  justify-between'>
  <div >
  
  <div className="space-x-10 mt-4"> {/* Adjust the margin as needed */}
  <NavLink to="/" className={'bg-slate-200 rounded-full px-3 py-1 ml-2'}>HOME</NavLink>
    <NavLink to="/about" className={'bg-slate-200 rounded-full px-3 py-1'}>ABOUT</NavLink>
    <NavLink to="/contact" className={'bg-slate-200 rounded-full px-3 py-1'}>CONTACT</NavLink>
    <NavLink to="/login" className={'bg-slate-200 rounded-full px-3 py-1'}>LOGIN</NavLink>
  </div>
</div>  <NavLink to="/" ><img src={post} className='mr-4 h-16 w-20' alt='Post' /> </NavLink>{/* Adjust the margin as needed */}</nav>
{/* <div className='flex justify-between items-center bg-red-500 pt-5 pb-5 '>
<img src={post} />
  <div>
    <NavLink to="/" className={''}>HOME</NavLink>
  </div>
  <div className="space-x-4">
    <NavLink to="/about" className={'bg-slate-200 rounded-fullxl'}>ABOUT</NavLink>
    <NavLink to="/contact" className={'bg-slate-200 rounded-fullxl'}>CONTACT</NavLink>
  </div>
  
</div> */}
</>
  )
}
