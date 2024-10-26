"use client";

import { useState } from "react";

const Page = () => {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("");
  // const [rePassword, setRePassword] = useState("");

  // const [shown, setShown] = useState(false);
  const [shown2, setShown2] = useState(false);

  // const isLongEnough = password.length >= 8;
  // const passwordsMatching = password === rePassword;
  // const isThereDigit = password.includes(1);

  const [color, setColor] = useState("#ccc");
  // const [operation, setOperation] = useState("red");

  // switch (operation) {
  //   case "blue":
  //     setColor("blue")
  //     break;
  //   case "green":
  //     setColor("green")
  //     break;
  //   case "yellow":
  //     setColor("yellow")
  //     break;
  //   case "red":
  //     setColor("red")
  //     break;
  // }


  const check = () => {
    if(password.includes("*")){
      setChecked("true");
    } else if(!password.includes("*")){
      setChecked("false");
    }
  }

  return (
    <div style={{backgroundColor: color}}>
      <div>
        <label>
          Password
          <br />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={shown2 ? "text" : "password"}
          />
          <button
            onClick={() => {
              setShown2(!shown2);
            }}
          >
            {shown2 ? "Hide" : "Show"}
          </button>
        </label>
        <button onClick={check}>check</button>
      </div>
      <p>is passowrd includes *</p>
      <input type="text" value={checked} onChange={(e) => {setChecked(e.target.value)}}/>




      <div style={{paddingTop: "100px"}}>
      {/* <button
        onClick={() => {
          setColor("green");
        }}
      >
        green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        blue
      </button>
      <button onClick={() => {
          setColor("red");
        }}>red</button>
      <button onClick={() => {
          setColor("yellow");
        }}>yellow</button> */}

        <select name="" id=""
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
        }}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
        </select>
    </div>
    </div>
  );
};

export default Page;