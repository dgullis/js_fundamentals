import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Profile from "./Profile.jsx"
import Product from './Product.jsx';
import Counter from './Counter.jsx';
import InputListener from './InputListener.jsx';
import Die from './Die.jsx';
const App = () => {

  return (
    <>
      <InputListener/>
      <Counter />
      <Die />
      
      <Profile 
        name="Makers Duck"
        job="duck"
        birthdate="2013"/>
      
      <div className="horizontal-line"></div>


      <Product
        name="product 1"
        description="product 1 description"
        price={10.99} />
        
      <div className="horizontal-line"></div>

      <Product
        name="product 2"
        description="product 2 description"
        price={20.99} />
    </>


  )
}

export default App
