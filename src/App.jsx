import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="">
    <form action="submit">
      <input type="text" placeholder='Your name' />
      <input type="email" placeholder='your email' />
      <button><Link to="/home">Submit</Link></button>
    </form>
  </div>
  )
}

export default App