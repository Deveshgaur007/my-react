import React, { useState } from "react";
import { Navigate } from "react-router-dom";



const Submit = () => {
  const [name, setname] = useState("");
  const [clas, setclas] = useState("");


  const collectData = async () => {
    try {
      console.log({ name, clas });

      let result = await fetch('http://localhost:1000/submit', {
        method: 'POST',
        body: JSON.stringify({ name, clas }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // await result.json();
      console.log(result);
      localStorage.setItem('User', JSON.stringify(result));



    }
    catch (err) {
      console.error(err)
    }
  }




  return (
    <div className="submit" >
      <h1>Entry</h1>
      <input className="inputbox" type="text" value={name} onChange={(e) => setname(e.target.value)}
        placeholder="Enter Name" />
      <input className="inputbox" type="text" value={clas} onChange={(e) => setclas(e.target.value)}
        placeholder="Enter Class" />
      <button className="button" onClick={collectData} >Submit</button>
    </div>
  )
}
export default Submit;