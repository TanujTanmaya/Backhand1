/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const Home = () => {
const[Inputval,setInputval]=useState(0);



//   const changeHandler = (e) => {
//     Inputval = e.target.value;
//     console.log(Inputval);
//   };

  const increment=()=>{
    setInputval(Inputval + 1);
  }

  const decrement=()=>{
    setInputval(Inputval- 1);
  }

  const btnStyle={
    padding:20,
    border:"none",
    backgroundColor:"#f1f1f1",
    margin:10
  }

  return (
    <div>
      <input
        style={{ padding: 10, border: "1.5px solid black" }}
        type="text"
       value={Inputval}
      />

      <button style={btnStyle} onClick={decrement}>-</button>
      <button style={btnStyle} onClick={increment}>+</button>
    </div>
  );
};

export default Home;
