import React, { useState } from 'react'
import { findNthPrime } from '../utils/helper'
const Demo = () => {
    const [text, setText] = useState(0)

    const prime = findNthPrime(text)
    
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
      <div>
        <input 
        className='border border-black w-72 px-2' type='number' value = {text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div>
        <h1>nth prime : {prime}</h1>
      </div>
    </div>
  )
}

export default Demo
