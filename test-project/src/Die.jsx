import React from "react";
import { useState } from "react";

const Die = () => {
    const [number, setNumber] = useState("")

    const roll = () => {
        setNumber(Math.floor(Math.random() * 6) + 1);
    }

    return (
        <>
        <h1>{number}</h1>
        <button onClick={roll}>Roll Dice</button>
        </>
    )

}

export default Die;



