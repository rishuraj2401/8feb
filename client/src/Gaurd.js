import React from 'react'
  import { useState ,useEffect} from 'react'
  import Navb from './Navb';
function Gaurd() {
      const [roll ,setRoll]=useState("");
      const [udata ,setUdata]=useState("");
      const onchangingroll=(e)=>{
        e.preventDefault();
        // const  name= e.target.name
         const value=e.target.value;
         setRoll(value);
         console.log(roll)
      }
      // const  roll  = roll;
      const call = async (e) => {
        
        e.preventDefault();
        
          const re = await fetch("/Permi", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({roll:roll})
          })
          var dat = await re.json();
          console.log(dat);
          setUdata(dat);
        
       
        
        if (!dat){
          window.alert("invalid");
          console.log("invalid")
        }
        else{
          window.alert("Registered");
          console.log("succccccessssssful")
        }}
        
          // PUT request using fetch with async/await
          async function updateAllow() {
              const requestOptions = {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ roll:roll })
              };
              const response = await fetch('/Per', requestOptions);
              const data = await response.json();
              setUdata(data);
              console.log(data);
          }
          async function updateReturn() {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roll:roll })
            };
            const response = await fetch('/Ret', requestOptions);
            const data = await response.json();
            setUdata(data);
            console.log(data);
        }
      
      
    
     
     
      
    return (
      <>
      <body>
      {<Navb/>}

      <div className="maine">
      <form method="POST"> </form>
      <div className="gcg">
      <label htmlFor="cheaking">Enter the roll number:</label>
      <input type="text" name="roll" id="" value={roll} onChange={onchangingroll}/><br/>
      <button type='button' onClick={call}>Check</button>
      <button type='submit' onClick={updateAllow}>Allowed</button>
     {/* <button type='submit' onClick={updateReturn} style={{float:"right"}} >Returned</button> */}
      </div>

      <div method ="GET">
      <div className="gatecont">
      <div></div>

        <div className="gc1a">

       <div className="gc1">
         <p>Name: </p> <p>{udata.name}</p>
        </div>
        {/* <div className="gc1"> */}
        {/* <p>Department:</p> <p>{udata.Department}</p>
        </div>
        <div className="gc1">
        <p>Branch:</p> <p>{udata.Branch}</p>
          </div>
          <div className="gc1">
          <p>Semester:</p> <p>{udata.Sem}</p>
          </div> */}
          <div className="gc1">
          <p>Roll no:</p> <p>{udata.Roll}</p>
          </div>
          <div className="gc1">
          <p>Room no:</p> <p>{udata.Room}</p>
          </div>
         
          
          <div className="gc1">
          <p> Leaving -Time:</p> <p>{udata.Lt}</p>
          </div>
          <div className="gc1">
          <p>Leaving-Date:</p> <p>{udata.Ld}</p>
          </div>
          <div className="gc1">
        {/* <p>Returned:</p> <p style={{color:"black"}}> {udata.return}</p> */}
          </div></div>
          <div className="gc1b">
          <div className="gc1">
          <p>Returning-Date:</p> <p>{udata.Rd}</p>
          </div>
          <div className="gc1">
          <p>Returning-Time:</p> <p>{udata.Rt}</p>
          </div>
          <div className="gc1">
          <p>Adress:</p> <p>{udata.Add}</p>
          </div>
          <div className="gc1">
          <p>Purpose:</p> <p>{udata.Pur}</p>
          </div>
          <div className="gc1">
          <p>Permission:</p> <p>{udata.Permitted}</p>
          </div>
          <div className="gc1">
        <p>Allowed:</p> <p >{udata.Allowed}</p>
        </div>
          </div>
          {/* <div className="gc1">
          <p>Name:</p> <p>{udata.name}</p>
          </div> */}
        
      </div>
       {/* <button type='submit' onClick={updateAllow}>Allowed</button>
       <p>{udata.Allowed}</p> */}
      </div>
      </div>
      </body>
      </>
    )}


export default Gaurd
