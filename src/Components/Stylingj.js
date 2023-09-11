import React, { useState } from "react";


export const Stylingj = () => {
    const [count, setCount]=useState(0);
    const IncNum =() => {
        setCount(count+1)
    }
    const DecNum =() => {
        setCount(count-1)
    }

    // const [Yourname, setCount1]=useState('');
    // const Iam =() => {
    //     setCount1("Yourname")
    // }
  return (
    <>
    <div>
    <div className="items-center mt-40">
    <div className="flex justify-center font-bold text-2xl"></div>
        <h1>{count}</h1>
    </div>
    <div className="m-28 justify-between">
        <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Inc click</button>
         {/* <button onClick={DecNum}
        className="bg-green-700 rounded-xl text-white font-bold">Decr click</button> */}
        {/* <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button>
        <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Yourname</button> */}

        
    {/* </div>
    <div className="items-center mt-40">
    <div className="flex justify-center font-bold text-2xl"></div>
        <h1>{Yourname}</h1>
    </div>
    <div className="m-28 justify-between">
        <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button> */}
        {/* <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button>
        <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Yourname</button> */}
        
    </div>
    </div>

    <div>
    <div className="items-center mt-50">
    <div className="flex justify-center font-bold text-2xl"></div>
        
    </div>
    <div className="m-40 justify-between">
        {/* <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Inc click</button> */}
         <button onClick={DecNum}
        className="bg-green-700 rounded-xl text-white font-bold">Decr click</button>
        {/* <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button>
        <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Yourname</button> */}

        
    {/* </div>
    <div className="items-center mt-40">
    <div className="flex justify-center font-bold text-2xl"></div>
        <h1>{Yourname}</h1>
    </div>
    <div className="m-28 justify-between">
        <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button> */}
        {/* <button onClick={Iam}
        className="bg-green-700 rounded-xl text-white font-bold">Iam</button>
        <button onClick={IncNum}
        className="bg-green-700 rounded-xl text-white font-bold">Yourname</button> */}
        
    </div>
    </div>
</>
  )
}



    
