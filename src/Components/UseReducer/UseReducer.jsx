import React, { useReducer } from "react";

const UseReducer = () => {


  const counterReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
      case "add":
        return state + action.payloa;
      case "subtract":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, 0);
 

  return (
    <div>
      <button onClick={()=>dispatch({type: "add", payloa : 5})}>add</button>
      <span>{state}</span>
      <button onClick={()=>dispatch({type: "subtract"})}>minus</button>
    </div>
  );
};

export default UseReducer;
