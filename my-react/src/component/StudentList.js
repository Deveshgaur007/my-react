import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentList = ()=>{
    var [Students,setStudents] = useState([]);


    useEffect(()=>{
        getStudent();

    },[]);


    const getStudent = async ()=>{
        var result = await fetch('http://localhost:1000');
        result = await result.json();
        setStudents(result);
    }
    console.log("students",Students);

const deleteStudent = async(id)=>{
        await fetch('http://localhost:1000/student/'+id ,{
            method:'DELETE'
        });
       

    }

    const handleUpdate =(item)=>{
     console.log(item)
    }



    return(
    <div className="List">
        <h3>StudentList</h3>
        <ul>
            <li>Id</li>
            <li>Name</li>
            <li>Class</li>
            <li>Delete</li>
            <li>Update</li>
        </ul>
        {
            Students.map((item,index)=>
                <ul key={index}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.clas}</li>
                <li><button  onClick={()=>deleteStudent(item.id)}>Delete</button></li>
                <li onClick= {()=>handleUpdate(item)}>Update</li>
            </ul>   
            )
        }
    </div>
    )
}

export default StudentList;