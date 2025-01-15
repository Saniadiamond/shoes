import React, { useState } from 'react'

function About() {
  let [count,setcount]=useState(0)
  return (
    <div>
      <div className="container">
        <button onClick={()=>{setcount(count+1)}}>Count{count}</button>
       
      </div>
    </div>
  )
}

export default About
