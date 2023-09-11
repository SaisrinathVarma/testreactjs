import React, { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, count1: state.count1, showText: state.showText };

      case "INCREMENTS":
      return { count: state.count, count1:state.count1 + 2, showText: state.showText };

     case "toggleShowText":
      return { count: state.count, count1:state.count1, showText: !state.showText };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, count1:0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.count1}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "INCREMENTS" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        
        Click here
      </button>

      {state.showText && <p> This is the text beign displayed</p>}
    </div>
    
  );
};

export default Reducer;
