import React from 'react'
import Navb from './Navb'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";


function Home() {
  const navigate=useNavigate();
  const [reg ,setReg]=useState({sname:"" ,sEmail:"" ,sRoll:"" ,spassword:"" ,scpassword:""})
  const onchanging=(e)=>{
    // e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setReg({...reg ,[name]:value})
  }
  const {sname ,sEmail ,sRoll ,spassword ,scpassword}=reg;
  const onregister=async(e)=>{
    e.preventDefault();
    const responsed = await fetch("/sregister" ,{
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({sname ,sEmail ,sRoll ,spassword ,scpassword  })
        })
        var dat = responsed.json();
        var ER= await responsed.status===404;


        if (!dat||ER) {
            window.alert("Enter all the field");
            console.log("invalid")
        }
        else {
            window.alert("Registration successful");
            console.log("succccccessssssful")
            navigate("/Gatepass")
        }
    }



    
  
  return (
<>
{<Navb/>}
<div className="home">
  <div className="hleft1"></div>
  <div className="hleft">
    {/* <img src=''alt='imag'/> */}
    <p id="hhead">𝐑𝐆𝐈𝐏𝐓 𝐓𝐑𝐀𝐕𝐄𝐋𝐋𝐈𝐍𝐆 𝐆𝐀𝐓𝐄𝐏𝐀𝐒𝐒</p>
  </div>
  <div className="hright">
    <h className=" hreg">ℝ𝕖𝕘𝕚𝕤𝕥𝕖𝕣 𝕐𝕠𝕦𝕣𝕤𝕖𝕝𝕗
</h>
    <form method='POST'>
<div className='home1'>
  <label htmlFor="">Name:</label>
<input className='home2' name="sname" value={reg.sname} onChange={onchanging} />
</div>
<div className='home1'>
<label htmlFor="">Email:</label>
<input type="email" className='home2' name="sEmail" value={reg.sEmail} onChange={onchanging} /> 
</div>
<div className='home1'>
<label htmlFor="">Roll No:</label>
<input className='home2' name="sRoll" value={reg.sRoll} onChange={onchanging}/>  
</div>
<div className='home1'>
<label htmlFor="">Password:</label>
<input type="password" className='home2' name="spassword" value={reg.spassword} onChange={onchanging}/> 
</div>
<div className='home1'>
<label htmlFor="">Confirm Password:</label> 
<input type="password" className='home2' name="scpassword" value={reg.scpassword} onChange={onchanging}/>
{/* <div className="home1">
<button type='submit'>Register</button>
</div> */}
</div>
{/* <button type='submit'>Register</button> */}
<p> <button type='submit' onClick={onregister} id="regbtn">Register</button><Link to="/Slogin" id="log">Already Registered? Login here </Link></p>
</form>
{/* <div className='home1'>
<label htmlFor="">Department:</label>
<input className='home2' name="" value="" />
</div>
<div className='home1'>
<label htmlFor="">Session:</label>
<input className='home2' name="" value="" />
</div> */}
</div>

</div>


</>
  )
}

export default Home