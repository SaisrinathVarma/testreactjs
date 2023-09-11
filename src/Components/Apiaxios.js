import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Apiaxios = () => {
  const [udata,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response=>{

    setData(response.data)
    }))

  })
  return (
    <div className='mt-9 text-center'>{udata.map((data)=>{
    return(<div>{`${data.id}`}</div>)})}</div>
  )
}

export default Apiaxios