// use of caching .. Loading.js component

import React, { useEffect, useState } from "react";
import axios from "axios";
import {useQuery} from "react-query";
const Loading = () => {
  const fetchData = () =>{
    return axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then((response)=>{
      return response.data;
    }).catch((error)=>{
      console.log("Error was occured" , error);
    })
  }
 const {data:userData , isLoading , isError} = useQuery("userData" , fetchData);

  return (
    <div className="ml-96">
      {isLoading ? (
        <div className="spinner">
          Loading...
        </div>
      ) : (
        userData.map((data) => (
          <div key={data.id}>
            {`${data.id})`}
            {`${data.title}`}
            <img src={data.url} alt={data.title} className="h-20" />
          </div>
        ))
      )}
    </div>
  );
};

export default Loading;
