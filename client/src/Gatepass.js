import React from 'react'
import { useState } from 'react'
import Navb from './Navb';


function Gatepass() {
    const [userdata, setUser] = useState({ name: "", Department: "", Branch: "", Sem: "", Roll: "", Room: "", Lt: "", Ld: "", Rd: "", Rt: "", Add: "", Pur: "" });
    const onchanging = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...userdata, [name]: value })
    };
    const { name, Department, Branch, Sem, Roll, Room, Lt, Ld, Rd, Rt, Add, Pur } = userdata;
    const call = async (e) => {

        e.preventDefault();

        const re = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, Department, Branch, Sem, Roll, Room, Lt, Ld, Rd, Rt, Add, Pur })
        })
        var dat = await re.json();



        if (!dat) {
            window.alert("invalid");
            console.log("invalid")
        }
        else {
            window.alert("Submitted");
//             console.log("succccccessssssful")
//             console.log(dat)
        }
    }



    return (
        <>
            
{<Navb />}

            <div className="maine">
                
                {/* <video autoPlay loop muted className="bgvideo">
                 <source src={video1} type='video/mp4'/>
             </video> */}
                <form method='POST'>
                    <div className="cont">
                        {/* <video autoPlay loop id="videoBG" //</div>style="background-position: center; z-index: -10;"
                > 
        <source src={v1} type="video/mp4"/>
    </video> */}
                        <div className="l1">
                            <div className="z">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" value={userdata.name} className='a' onChange={onchanging} /><br />
                            </div>

                            {/* <div className="z"><label htmlFor='roll'>Programe:</label>
                                <input type="select" name="Department" value={userdata.Department} onChange={onchanging} className='a'/><br />
                            </div>
                            <div className="z"> <label htmlFor="name">Branch:</label>
                                <input type="text" name="Branch" className='a' value={userdata.Branch} onChange={onchanging} /><br />
                            </div>
                            <div className="z"> <label htmlFor="name">Semester:</label>
                                <input type="text" name="Sem" value={userdata.Sem} className='a' onChange={onchanging} /><br />
                            </div> */}
                            <div className="z"> <label htmlFor="name">Roll no.:</label>
                                <input type="text" name="Roll" value={userdata.Roll} className='a' onChange={onchanging} /><br />
                            </div>
                            <div className="z"><label htmlFor="name">Room no:</label>
                                <input type="text" name="Room" value={userdata.Room} className='a' onChange={onchanging} /><br />
                            </div>
                       
                            <div className="z"><label htmlFor="Time">Leaving Time:</label>
                                <input type="Time" name="Lt" value={userdata.lt} className='a' onChange={onchanging} /><br />
                            </div>
                            <div className="z">
                                <label htmlFor="name">Leaving Date:</label>
                                <input type="Date" name="Ld" value={userdata.Ld} className='a' onChange={onchanging} /><br />
                            </div></div>
                            <div className="r1">
                            <div className="z">
                                <label htmlFor="name">Returning Date:</label>
                                <input type="Date" name="Rd" value={userdata.Rd} className='a' onChange={onchanging} /><br />
                            </div>
                            <div className="z">
                                <label htmlFor="name">Returning Time:</label>
                                <input type="Time" name="Rt" value={userdata.Rt} className='a' onChange={onchanging} /><br />
                            </div>
                            <div className="z">
                                <label htmlFor="name">Address:</label>
                                <input type="text" name="Add" value={userdata.Add} className='a' placeholder='where are you going?' onChange={onchanging} /><br />
                            </div>
                            <div className="z">
                                <label htmlFor="name">Purpose:</label>
                                <input type="text" name="Pur" value={userdata.Pur} className='a' placeholder="Reason of visiting" onChange={onchanging} /><br />

                            </div>
                            <div className="z">
                                <button type='submit' onClick={call}>Generate Gatepass</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>


        </>
    )
}

export default Gatepass
