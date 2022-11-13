import React,{useState, useContext, useEffect} from 'react'
import {Input} from "@chakra-ui/react"
import { AuthContext } from '../Context/CreateAuthContext';
import "./Navbar/CSS/Login.css"
import axios from 'axios';



const initState = {
    userName:"",
    email:"",
    password:"",
    mobileNo:"",
}

const handleLLogin = (data)=>{
  const {userName,email,mobileNo, password} = data;
  return axios.post(`http://localhost:4000/auth`,{
    data:{
      userName:userName,
      email:email,
      mobileNo:mobileNo,
      password:password
    }
  })
}


const Login = () => {
    const [formstate, setFormstate] = useState(initState);
    const { search , setSearch}= useContext(AuthContext);

    const hideSeachbar = ()=>{
      setSearch(false);
    }

    useEffect(()=>{
        hideSeachbar();
    },[])


    const handleonSubmit = (e)=>{
          e.preventDefault();
          console.log(formstate)
          handleLLogin(formstate);
          setFormstate(initState)
    }
    const handleonChange = (e)=>{
        const {name, value} = e.target;
        setFormstate({...formstate,[name]:value})
    }

  

  return (
    <form className="form" onSubmit={handleonSubmit}>
        <Input 
          autoCorrect = "off"
           name="userName" 
           value={formstate.userName} onChange={handleonChange}
           type="text"
           placeholder="Enter Your Name"
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
           <Input
           style={{border:"2px solid white", width:"20%", margin:"auto"}}

            type="submit"
            placeholder='Login'
            value="Login"
           />
           
    </form>
  )
}

export default Login
