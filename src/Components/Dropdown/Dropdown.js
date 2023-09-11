import React from "react";
import {HiOutlineArrowRight, HiOutlineEnvelope} from "react-icons/hi2"



export const Dropdown = () => {
    return (
    <>
{/* //         <div className="dropdown mt-2">
//         <label for="cars">Choose a car:</label>

// <select name="cars" id="cars">
// <option value="volvo">Volvo</option>
// <option value="saab">Saab</option>
// <option value="mercedes">Mercedes</option>
// <option value="audi">Audi</option>
// </select>
//         </div> */}
{/* <div className="box1">
<img className="rectangle1" alt="Rectangle1" src={post} />
</div>

<div className="icon-dropdown">
<img className="vector" alt="Vector" src={postt} />
</div> */}
<div className='w-[130px] h-10 px-2 mt-1  md:px-[18px] py-3 bg-red-600 hover:bg-red-800 shadow-md flex-col justify-center items-start gap-2 inline-flex focus:shadow-outline'>
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className="w-6 h-6 md:w-[18px] md:h-[18px] relative flex justify-center items-center">
            <HiOutlineEnvelope style={{ color: 'white' }} />
          </div>

          <div className="text-center text-white text-sm font-semibold leading-tight">Button</div>
          <div className="w-6 h-6 md:w-[18px] md:h-[18px] relative flex justify-center items-center">
          <HiOutlineArrowRight style={{ color: 'white' }} /></div>
        </div>
      </div>

<select className=' p-1 w-2/12 first-letter:border rounded-sm border-gray-300 m-4 '>
        <option value="item1" selected  >Dropdown</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>

</>

    );
};
