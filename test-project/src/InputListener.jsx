import React from "react";
import { useState } from "react";

const InputListener = () => {
    const [input, setInput] = useState('')
    const logInput = (event) => {
        setInput(document.getElementById('input').value)
        console.log(input)
    }

    return (
    <>
        <input id='input' onChange={logInput}/>
    </>
    )
    
}

export default InputListener;