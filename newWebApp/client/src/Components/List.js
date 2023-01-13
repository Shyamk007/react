import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function List (){
  let[obs,setobs] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/getdata`).then((res)=>{
      setobs(res.data)
    })
    .catch((error)=>{console.log(error)})
  },[])

  const del=async(id)=>{
    axios.delete(`http://localhost:5000/${id}`).then((res)=>{
     alert("selected data is deleted"); 
    })
  }

  const render = () =>
  obs.map((obj,index)=>{
    return <li><ul><li>{obj.name} <button type='button' onClick={()=>{del(obj._id)}}>Delete</button></li><li>{obj.email}</li></ul></li>
  })

  return (
    <section>
      <ol>
        {render()}
      </ol>
    </section>
    
  )
}

export default List;