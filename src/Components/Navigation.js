import React from 'react'
import postal from "../assets/postal.jpeg"
 
export const Navigation = () => {
  const fname="Ravi";
  const lname="Kumar";
  
  return (
    <div>
    <nav className="p-4 flex space-x-3 bg-red-500 font-bold text-center justify-center align-text-bottom " >
    <img src={postal} className='h-6 rounded-full p-10'></img>
    <h1>Navigation</h1>
    <h1>About</h1>
    <h1>Contact</h1>
    </nav>
    <h1>My name is {fname} {lname} </h1>
    <h1>{`my name is  ${fname} ${lname}`} </h1>
    </div>
  )
}
