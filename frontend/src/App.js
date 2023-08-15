
import React, { useState } from "react";
function App() {
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [text,setText] =useState('')
  const handleSubmit= async (e)=>{
      
  }
  return (
   
    <div className="">
      <div className="card w-50 mx-auto p-3 mt-5">
        <h1>Send Email Using Nodemailer</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={(e)=>setText(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-outline-success mt-5">Success</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
