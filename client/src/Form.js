import React from 'react'
import { useState } from 'react'
import Navb from './Navb';

export const Form = () => {
  const [data, setData] = useState({ firstname: "", email: "" });
  const onchanging = (e) => {
    // const datas={ name:e.target.name ,email:e.target.email}
    const name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value })
  }
  const { firstname, email } = data;
  const call = async (e) => {
    
    e.preventDefault();
    
      const re = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({firstname, email})
      })
      var dat = await re.json();
    
   
    
    if (!dat){
      window.alert("invalid");
      console.log("invalid")
    }
    else{
      window.alert("Perfection");
      console.log("succccccessssssful")
    }}
  



  return (
    <>
    {<Navb/>}
      <form method="POST">
        name:<input name="firstname" value={data.firstname} onChange={onchanging} />
        email:<input name="email" value={data.email} onChange={onchanging} />
        <button type='submit' onClick={call}>click</button>
      </form>
      <p>{data.firstname}  {data.email}</p>
    </>
  )
}
