import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Navb from './Navb'


function Glogin() {
    const navigate = useNavigate()
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
    var onlogin = async (e) => {
        e.preventDefault();
    if (!cEmail || !cpassword) {
        if (!cEmail && !cpassword) {
            setErr({ ...errr, emEr: '*Required', paEr: "*Required" })
        }

        else {
            if (!cEmail) {
                setErr({ ...errr, emEr: '*Required', paEr: '' })
            }
            if (!cpassword) {
                setErr({ ...errr, emEr: "", paEr: "*Required" })
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
            var dat = await responsed.json();



            const data = await responsed.status === 404
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
                navigate("/Gaurd")

            }
        }
    }
    return (
        <>
            {<Navb />}
            <div className='glogin'>
                <div className="lo"></div>
                <div className='log1'>
                    <div className="log1a">
                        <p>𝐆𝐮𝐚𝐫𝐝𝐬 𝐏𝐨𝐫𝐭𝐚𝐥</p>
                    </div>
                    <div className="log1b">
                    <span>{errr.emEr}</span><br/>
                        <label htmlFor="">𝓔𝓶𝓪𝓲𝓵</label>
                        <input type='email' className='log2' name="cEmail" value={logs.cEmail} onChange={onchanging} /> <br />
                        <span>{errr.paEr}</span><br/>
                        <label htmlFor="">𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭</label>
                        <input type='password' className='log2' name="cpassword" value={logs.cpassword} onChange={onchanging} />
                        <div className="log">
                            <button type='submit' onClick={onlogin}>Login</button>
                            <p><Link to="/" id="log">𝒟𝑜𝓃'𝓉 𝒽𝒶𝓋𝑒 𝒶𝓃 𝒶𝒸𝒸𝑜𝓊𝓃𝓉? 𝑅𝑒𝑔𝒾𝓈𝓉𝑒𝓇 𝒽𝑒𝓇𝑒 </Link></p>
                        </div>
                    </div></div>

            </div>
        </>
    )
}

export default Glogin