import React from 'react'
import { useState ,useEffect} from 'react'
import Navb from './Navb';

function Permit() {
    const [roll ,setRoll]=useState("");
    const [udata ,setUdata]=useState("");
    const [abc , setAbc]=useState([1,2,3]);
    // const [date ,setDate]=useState()
    
// let arr1=[]
    //  const r=abc[0].Roll
    // var x ;
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          "/Permi", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        // const aArr=[]
        let actualData = await response.json();
        // const ab =JSON.stringify(actualData)
        // arr1.push(actualData)
        // console.log(arr1) 
        setAbc(actualData)
        // var x;
        // for( x=0 ;x<abc.length ;x++){
        // console.log(abc[0].name);
        // setAbc(actualData[x])
      
        // const { name, Department, Branch, Sem, Roll, Room, Lt, Ld, Rd, Rt, Add, Pur } = abc;
      }
      getData()
    },[])
    let x =abc.length-1;
   const [a ,setA]=useState(x)
   
  const onminus=()=>{
    let x1=a
    if (x1>0){
      x1=x1-1
      setA(x1)}
      else 
      window.alert("this was the first submission")
  }
  const onplus=()=>{
    const l=abc.length-1
    let x2 =a
    if (x2<l){
    x2=x2+1;
    setA(x2)}
    else
    window.alert("this is the recent one")
  }
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
        var dat =await re.json();
        var iferr =await re.status===404
        console.log(dat);
        setUdata(dat);
      
     
      
      if (!dat || iferr){
        window.alert("invalid");
        console.log("invalid")
      }
      else{
        window.alert(" Yes Found");
        console.log("succccccessssssful")
      }}
      
        // PUT request using fetch with async/await
        async function updatePost() {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roll:roll })
            };
            const response = await fetch('/Permi', requestOptions);
            const data = await response.json();
            setUdata(data);
            console.log(data);
        }
    
    
    
  
   
    // const calling = async(e)=> {
    //   e.preventDefault();
    //     try{
    //       const res= await fetch("/Permi" ,{
    //         method:"GET",
    //         headers:{
    //           Accept:"application/json",
    //           "Content-Type":"application/json"
    //         },
    //         // body:JSON.stringify({roll:roll}),
    //         credentials:"include"
    //       });
    //       const data=await res.json();
    //       console.log(data);
    //       setUdata(data);
    
    //     }
    //     catch(err){
    //       console.log("error"+err);
    
    //     }}
    
    
  return (
    <>
    {<Navb/>}
    <div className="maine2">
    <form method="POST"> </form>
    <div className="gc">
    <label htmlFor="cheaking">Enter the roll number:</label>
    <input type="text" name="roll" id="" value={roll} onChange={onchangingroll}/><br/>
    <button type='button' onClick={call}>Check</button>
    <button type='submit' onClick={updatePost}>Permited</button>
    </div>
    <div method ="GET">
    <div className="gatecont">
      <div className="gc1a">
      <div className="gc1">
       <p>Name: </p> <p>{udata.name}</p>
      </div>
      {/* <div className="gc1">
      <p>Department:</p> <p>{udata.Department}</p>
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
        <p> Leaving-Time:</p> <p>{udata.Lt}</p>
        </div>
        <div className="gc1">
        <p>Leaving-Date:</p> <p>{udata.Ld}</p>
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
        <p>Allowed:</p> <p>{udata.Allowed}</p>
        </div></div>
      {/* <h1>Last Submition :{arr1.map(item=><p>{item}</p>)}</h1> */}
      {/* <h2> {abc.map(item=><p>{item.Roll} Status:{item.Permitted}</p>)}</h2> */}
     
    </div>
    <div className='gc2'>
   <p>Recent Submition: {abc[a].Roll}</p>
   <p>Status:  {abc[a].Permitted}</p>
   <button type='button' onClick={onminus}>Previous</button>
   <button type='button' onClick={onplus}>Next</button>
   </div>
    </div>
    </div>
    </>
  )}

export default Permit
