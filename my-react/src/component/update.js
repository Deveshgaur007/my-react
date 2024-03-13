// import React, { useEffect, useState } from "react";

// import { Navigate, useParams } from "react-router-dom";




// const Updt = () => {
//   const [name, setname] = useState([]);
//   const [clas, setclas] = useState([]);
//   const params = useParams()
 
 

//   useEffect(()=>{
   
//     getDetails()
//   },[]);

//   const getDetails = async()=>{
//     //  console.log(params)
//     var result = await fetch(`http://localhost:1000/student/${params.id}`)
//     console.log(result)
 
//     // result = await result.json()s
//     setname(result.name);
//     // setclas(result.clas);
//     localStorage.getItem(JSON.stringify(result))
//   }   


//   const updtData =  () => {
//     console.log({name,clas})
//   }



//   return (
  

//     <div className="update" >
//       <h1>Update</h1>
//       <input className="inputbox" type="text" value={name} onChange={(e) => setname(e.target.value)} />
//       <input className="inputbox" type="text" value={clas} onChange={(e) => setclas(e.target.value)}/>
//       <button className="button" onClick={updtData} >Update</button>
//     </div>
//   )
// }









// App.js
import React, { useState, useEffect } from 'react';


function Updt() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState('');

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const fetchUserById = async () => {
    try {
      const response = await fetch(`http://localhost:1000/students/${userId}`);
      const data = await response//.json();
      setUser(data);
     
      console.log(response)
      console.log(data)

    } catch (error) {

      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={fetchUserById}>Fetch User</button>
        {/* <div>
          <h2>name:{user.name}</h2>
          <p>Clas: {user.clas}</p>
        </div> */}




















    </div>
  );
}



export default Updt;