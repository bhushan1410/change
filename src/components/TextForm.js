import React, {useState} from 'react'

export default function TextForm(props){ 
  const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    props.showAlert(" converted to uppercase" , "success ")
     setText(newtext)
  }
  const handleDownClick = () =>{ 
    let newText = text.toLowerCase();
    props.showAlert(" converted to Lowercase" , "success ")
    setText(newText)
  }
  const handleOnChange = (event) =>{
     setText(event.target.value)
  }
const[text,setText] = useState("Enter The Text")
  return (
    <>
     <div className= "container" >
    <h1>{props.heading} </h1>
     <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick ={handleUpClick}  >Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick ={handleDownClick}  >Convert to Lowercase</button>
  </div>
     <div className="container my-3" >
      <h1> Your Text Summary</h1>
      <p> 
        {text.trim().split(" ").length} words   {text.length} character</p>
     </div>
     </>
  )
}
 