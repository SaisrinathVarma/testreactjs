import React from 'react'
import post from '../assets/postal.jpeg';

const Ipvs = () => {
  return (
    <>
     <div className='flex space-x'>
        <div className='bg-slate-400 w-48 h-screen'><img className='h-20'src={post}/>
        
        <div className='bg-yellow-400 h-10 border-b-2 text-center pt-1'>Bag Receive</div>
        <div className='bg-yellow-400 h-10 border-b-2 text-center pt-1'>Bag Open</div>
        <div className='bg-yellow-400 h-10 border-b-2 text-center pt-1'>Bag Close</div>
        <div className='bg-yellow-400 h-10 border-b-2 text-center pt-1'>Bag Dispatch</div>
        </div>
    <div className='w-full h-20 bg-yellow-400 text-center pt-4 flex-col text-white font-bold'>
   <div>IPVS 2.0 </div><div className='m-10'>Content Div</div> 
    </div>
    </div>
     </>
  )
}

export default Ipvs