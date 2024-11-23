'use client'

import React from 'react';
import { useState } from 'react';
import { SiActigraph } from "react-icons/si";

const ReactHooks = () => {
    const [ age, setAge ] = useState(24);
    const agePoint = () => {
        <h1>{age}</h1>
    }
    function increase(){
        setAge(age +1)
    }
    function decrease(){
        setAge(age -1)
    }
  return (
    <div>
        <h1 className='text-orange-600'>{age}</h1>
        <button onClick={increase}>Plus</button>
        <button onClick={decrease}>Minus</button>
        <SiActigraph />
    </div>

    
  )
}

export default ReactHooks
