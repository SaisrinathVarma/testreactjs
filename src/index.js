import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CheckBoxes from "./Components/Checkbox/Checkbox";
import { Dropdown } from "./Components/Dropdown/Dropdown";
import CheckBox from "./Components/Checkbox/Checkbox";
import Datepicker from "./Components/Datepicker/Datepicker";
import Textbox from "./Components/textboxevent";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import Pagination from "./Components/Pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Dropdown/>
    <CheckBox/>
    <Datepicker/>
    <Textbox/>
    <App/>
    
  <Pagination/>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
