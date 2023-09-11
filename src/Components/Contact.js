import React from "react";
import { Heading } from "./Heading";

export const Contact = () => {
  const [inputvalue, setinputValue] = React.useState("");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <>
      <Heading />
      <div>
        <input type="text" placeholder="Enter name" onChange={handleChange} />
      <br/>
        <h1>{inputvalue}</h1>
      </div>
    </>
  );
};


