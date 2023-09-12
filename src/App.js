import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import { ErrorPage } from "./Components/ErrorPage";
import Login from "./Components/Login";
import './index.css';
const App = () => {

  
  return (
    <>
    <div>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/login" element={<Login/>}/>
       {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </div>
    </>
  );
};
export default App;