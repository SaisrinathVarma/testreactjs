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
import { Emailtextbox } from "./Components/Emailtextbox/Emailtextbox";
import { Mobilenumber } from "./Components/Mobilenumber/Mobilenumber";
import Ipvs from "./Components/Ipvs";
import button from "./Components/button";
import Regex from "./Components/Regex";
import Button1 from "./Components/button";
import Loading from "./Components/Loading";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient(
  {
  defaultOptions: {
    queries:{
      cacheTime : 10000,
    }
  },
}
);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Loading/>
 
  {/* <BrowserRouter>
  <Dropdown/>
    <CheckBox/>
    <Datepicker/>
    <Textbox/>
    <App/>
    
  <Pagination/>
    </BrowserRouter> */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
