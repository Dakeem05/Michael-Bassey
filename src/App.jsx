import React from "react";
import {Flex} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function App() {
  const inputStyles ={
    width:"16em",
    height:"2.5em",
    backgroundColor:"antiquewhite",
    borderRadius:"0.5em",
    paddingLeft:"1em",
    margin:"1em 0 1em 0"
    // border:"1px solid red"

  }
  const inputFieldStyles ={
    display:"flex",
    flexDirection:"column"
  }
  const buttonStyles ={
    width:"100%",
    height:"2.5em",
    borderRadius:"0.5em",
    marginTop:"1em",
    backgroundColor:"palevioletred"
  }
  const navigate = useNavigate();
  const formHandler = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()]
    const data = Object.fromEntries(formData);
    const isEmpty = values.includes("")

    if(isEmpty) {
      alert("fill up all the fields")
      return;
    }
    navigate("/home")

    e.currentTarget.reset();
    // console.log(data);
    // console.log(formData);
  }
  return (
    <Flex style={{position:"relative", height:"20em", border:"1px solid red", top:"10em", left:"35vw", padding:"2em"}}>
    <form onSubmit={formHandler} action="submit">
      <div style={inputFieldStyles} className="inputField">
        <label htmlFor="name">Name</label>
        <input style={inputStyles} type="text" name="name" placeholder='Your name' />
      </div>
      <div style={inputFieldStyles} className="inputField">
        <label htmlFor="email">Email</label>
        <input style={inputStyles} type="email" name="email" placeholder='your email' />
      </div>
      <input style={buttonStyles} type="submit" value="Submit" />
    </form>
  </Flex>
  )
}

export default App