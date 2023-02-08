import React from 'react'
import { useState } from 'react';


export const Navbar=() =>{
  const [user, setUser]=useState("");
  const databack= async()=>{
    try{
      const res= await fetch("/nav" ,{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data= await res.json();
      console.log(data);
      setUser(data)

    }
    catch(err){
      console.log(err);

    }
  }
  return (
    <>
    <button type='button' onClick={databack}>please click</button>
    <div>{user.email}</div>
    </>
  )
}
