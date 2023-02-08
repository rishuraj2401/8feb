import React from 'react'
import { Link } from 'react-router-dom'
// import Navb from './Navb'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Navb from './Navb'

function Hlogin() {
  const navigate = useNavigate();
  // const history= useHistory()
  const [logs, setLogs] = useState({ cEmail: "", cpassword: "" })
  const [errr, setErr] = useState({ emEr: '', paEr: '' })
  const onchanging = (e) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLogs({ ...logs, [name]: value })
  }
  const { cEmail, cpassword } = logs;
  const onlogin = async (e) => {
    e.preventDefault();
    if (!cEmail || !cpassword) {
      if(!cEmail && !cpassword){
      setErr({ ...errr, emEr: '*Required', paEr: "*Required" })
    }
     
      else{
        if (!cEmail) {
          setErr({ ...errr, emEr: '*Required', paEr:'' })}
        if (!cpassword) {
            setErr({ ...errr,emEr:"", paEr: "*Required" })
          }  
      }

  }
    

    
    else {
      const responsed = await fetch("/clogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cEmail: cEmail, cpassword: cpassword })
      })
      const dat =  responsed.json();
    //  const  data= await JSON.parse(dat)
    const data= await responsed.status===404
    //  console.log(dat);

                                                                                 
      if (!dat || data) {
        // window.alert("invalid");
        // e.status(404).send("not found")
        setErr({ ...errr, emEr: '*Incorrect credential', paEr: "*Incorrect credential" })
        console.log("invalid")
      }
      else {
        // window.alert("perfect registration");
        console.log("succccccessssssful")
        console.log(dat);
        //   history.push("/Gatepass");
        navigate("/Permit")

      }
    }
  }
  return (
    <>
      {<Navb />}
      <div className='hlogin'>
        <div className="lo"></div>
        <div className='log1'>
          <div className="log1a">
            <p>𝐎𝐟𝐟𝐢𝐜𝐞 𝐏𝐨𝐫𝐭𝐚𝐥</p>
          </div>
          <div className="log1b">
          <span>{errr.emEr}</span><br/>
            <label htmlFor="">𝓔𝓶𝓪𝓲𝓵    </label>
            <input type="email" className='log2' name="cEmail" value={logs.cEmail} onChange={onchanging}  />  <br /><br/>
            <span>{errr.paEr}</span><br/>
            <label htmlFor="">𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭 </label>
            <input type='password' className='log2' name="cpassword" value={logs.cpassword} onChange={onchanging} /><br/> 
            <div className="log">
              <button type='submit' onClick={onlogin}>Login</button>
              <p><Link to="/" id="log">Don't have an account? Register here </Link></p>
            </div>
          </div></div>

      </div>
    </>
  )
}

export default Hlogin