import React, { useRef } from 'react'
import { Link, useActionData, useNavigate } from 'react-router-dom'
import { auth } from '../Data/firebase'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { UseDispatch, useDispatch } from 'react-redux'
import { setCurrentUser } from '../store/AuthSlice'
import 'firebase/database'



const SignupPage = () => {
    
    const mailID=useRef("");
    const name=useRef("");
    const password=useRef("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
  
    const onRegisterHandler=async()=>{
      try{
           console.log("kgjfdkfj")
          if(mailID.current.value && password.current.value){
             const res= await createUserWithEmailAndPassword(auth,mailID.current.value,password.current.value);
             await updateProfile(auth.currentUser,{displayName:name.current.value})
             
             const user=res.user; 
             if(user){
                navigate("/login");
             }
             console.log(user)
             dispatch(setCurrentUser(user))
          }
          
      }
      catch(e){
         console.log(e);
      }
    }
    

  return (
    <div>
      <div className="bg-gradient-to-b from-[#23282e] to-black h-screen flex justify-center items-center">
      <div className="text-white flex flex-col w-[400px] max-md:w-4/5 p-4 gap-1  bg-gradient-to-b from-[#FC9F16] to-[#11182A] rounded-lg">
        <h2 className="text-2xl mb-4 ">Register to Leetcode</h2>
        <label>Your Email</label>
        <input type="email" className="p-2 rounded-md bg-[#4B5563] mb-4" placeholder="demo@gmail.com" ref={mailID}/>

        <label>Your Name</label>
        <input type="text" className="p-2 rounded-md bg-[#4B5563] mb-4" placeholder="Jack Sparrow" ref={name} />
        <label>Your Password</label>
        <input type="password" className="p-2 rounded-md bg-[#4B5563] mb-4" placeholder="......." ref={password} />
        
        
        <button className="bg-yellow-600 text-white p-3 rounded-lg mb-2" onClick={onRegisterHandler}>Register</button>
       
        <span className="text-left text-sm mb-4">Already Have Account?<span className="text-blue-700 cursor-pointer"><Link to="/login"> log in</Link></span></span>
      </div>
    </div>
    </div>
  )
}

export default SignupPage
