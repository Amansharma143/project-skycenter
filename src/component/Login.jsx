import React, { useState } from "react";
import { Button } from "@mui/material";


const Login =()=>{
    const[email,SetEmail]=useState();
    const[password,SetPassword]=useState();

    const [allEntry,setAllEntry ]=useState([]);

    const submitForm =(e)=>{
        e.preventDefault()

        const newEntry={email:email,password:password}
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);

       

    }
    return(
        <>
        <section>
            <div className="imgbox" >
                <img src="./image/img111.jpg" alt="air"/>
            </div>
        
        <div style={{direction:"rtl"}}>
        <form action="" onSubmit={submitForm} className="form">
             
             
             
             <div className="divvv" >
             <p style={{textAlign:"center" ,fontFamily:"monospace"}}><span style={{fontSize:"50px",color:"blue"}}><strong>SKY CENTER</strong></span><br/>
             <span> AIR TRAVEL PVT LTD </span></p>
             
             <div className="div1">
            <h3>Enter Your Login Details</h3>
             <br/>
                <label htmlFor="email" > Username</label>
                <input type="text" name="email" id="email" autocomplete="off" placeholder="username" style={{border:"1px solid blue" ,width:"400px",height:"30px" ,borderRadius:"5px"}}  value={email} onChange={(e)=>SetEmail(e.target.value)}/>
             <br/>
                <label htmlFor="password"> Password</label>
                <input type="password" name="password" id="password" autocomplete="off" placeholder="Password" style={{border:"1px solid blue" ,width:"400px",height:"30px" ,borderRadius:"5px"}} value={password} onChange={(e)=>SetPassword(e.target.value)}/>
             <br/>

             <Button variant="contained" type="submit">Login</Button>
             </div>



             </div>
        </form>
        </div>

        </section>

        </>

    );
}
export default Login