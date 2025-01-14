import React from "react";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
    let [text,Settext]=useState('')
    function changetext(event){
        Settext(event.target.value)
    }
    return (
        <div className='app'>
            <div className='preview'>
            <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
             <textarea onChange={text}>
            </textarea>   
            </div>
        </div>
    )
}