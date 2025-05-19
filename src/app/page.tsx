"use client"
import { useState } from "react";
import "./globals.css"

export default function Home() {
  const [number, Setnumber] = useState(0)
  
  function add1() {
    Setnumber(number + 1)
  }

  function sub1() {
    Setnumber(number - 1)
  }

  return (
    <div id="counter">
      <h1>counter</h1>
      <p>{number}</p>
        <div id="buttons">
          <button onClick={add1}>+1</button>
          <button onClick={sub1}>-1</button>
        </div>
    </div>
  );
}
