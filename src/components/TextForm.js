import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = ' ';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    

    const [text, setText] = useState(' '); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
       <>
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length}words and{text.length} character </p>  
            <p>{0.008* text.split("").length}Minute read</p>
            <h2>Prview</h2>
            <p>{text }</p>
          </div> 
        </div>
        </>
    )
}
