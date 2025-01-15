import React, { useState } from "react";

function Register() {
    let [form,setForm]=useState('0')
    let [counter,setCounter]=useState('')
   let submitform=()=>{
    setForm("")
   }
  return (
    <div>
      <div style={{ textAlign: "center", padding:'12px', margin:'12px' }}>
        <h1>Registration Form</h1>
        <form action=""onSubmit={submitform}>
          <input type="text" placeholder="Enter Your Name" /> <br />
          <input type="password" placeholder="Enter Your Password" /> <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
