
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./Emailtextbox.css";

export const Emailtextbox = () => {
return (

   
        <div className="input-layer border-gray-500 border-2 focus:border-sky-500 focus:outline-none m-2">
        <div className="input">
        <HiOutlineMail className="heroicons-outline" color="#9EA5AD" />
        <div className="text-wrapper"><input
          
          placeholder="Enter your email"
          
        /></div>
        </div>
        </div>
        );
        };

        
{/* <div className="input-layer border-2 ">
<div className="input">
<HiOutlineMail className="heroicons-outline" color="#9EA5AD" />
<div className="text-wrapper"><input className="border-gray-500 border-2 focus:border-sky-500 focus:outline-none"
          
          placeholder="Enter your email"
          
        /></div>

</div>
</div>
);
}; */}

// BsFillEnvelopeAtFill
// HiOutlineMail border-gray-500 border-2 focus:border-sky-500 focus:outline-none