import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import "./Mobilenumber.css";

export const Mobilenumber = () => {
    return (
        <div className="input-layer">
            <div className="dropdown">
                <div className="dropdown-text">IN</div>
                <IoIosArrowDropdownCircle className="heroicons-outline" color="#676E76" />
            </div>
            <div className="input">
                <div className="text-wrapper flex space-x-1"><input 
          placeholder="Enter Phonenumber"
          
        /><BsTelephone className="heroicons-outline" color="#676E76" /></div>
            </div>
            
        </div>
    );
};

//ChevronDown BsTelephone IoIosArrowDropdownCircle