import React,{useState, useContext, useEffect} from 'react'
import {Input, Button} from "@chakra-ui/react"
import "./signup.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const initState = {
    userName:"",
    email:"",
    password:"",
    mobileNo:"",
}

const handleLLogin = (data1)=>{

  const {userName,email,mobileNo, password} = data1;

  if(userName === "" || email === "" || password === "" || mobileNo === "")
  {
    return;
  }

  return  axios
            .post(`http://localhost:4000/auth`,
            {
              userName:userName,
              email:email,
              mobileNo:mobileNo,
              password:password
            })
}


const Signup = () => {
    const [formstate, setFormstate] = useState(initState);

    const handleonSubmit = (e)=>{
          e.preventDefault();
        
          const {userName,email,mobileNo, password} =formstate;

          if(userName === "" || email === "" || password === "" || mobileNo === "")
          {
            alert("All fields are required")
            return;
          }
    }
    const handleonChange = (e)=>{
        const {name, value} = e.target;
        setFormstate({...formstate,[name]:value})
    }

  
  return (
    <div className="main">
    <h2 className='h2'>Signup form</h2>
      <form className="form" onSubmit={handleonSubmit}>
        <Input 
          autoCorrect = "off"
           name="userName" 
           value={formstate.userName} onChange={handleonChange}
           type="text"
           placeholder="Enter UserName"
           variant='flushed'
           />
         <Input 
         autoCorrect = "off"
           name="email" 
           value={formstate.email} onChange={handleonChange}
           type="email"
           placeholder="Enter Your email"
           variant='flushed'
           />
            <Input 
            autoCorrect = "off"
           name="mobileNo"  
           value={formstate.mobileNo} onChange={handleonChange}
           type="Number"
           placeholder="Enter Your Mobile No."
           variant='flushed'
           />
         <Input 
           name="password"  
           value={formstate.password} onChange={handleonChange}
           type="password"
           placeholder="Enter Your password"
           variant='flushed'
           />
           <Input  m="auto"
           p="0px 0px 0px -10px"
           style={{border:"2px solid white", width:"20%"
          }}

            type="submit"
            placeholder='Register'
            value="Register"
           />
    </form>
    <Link to="/login">Already registered?</Link>
    </div>
    
  )
}

export default Signup