import React,{useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth} from "../Data/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {setCurrentUser, setIsLogin} from "../store/AuthSlice"
import {toast} from "react-toastify"

const LoginPage = () => {

  const mailID=useRef("");
  const password=useRef("");
  // const isLogin=useSelector((state)=>state.auth.isLogin);
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const onLoginHandler=async()=>{
    try{
       
        if(mailID.current.value && password.current.value){
           const res= await signInWithEmailAndPassword(auth,mailID.current.value, password.current.value );
           console.log(res.user);
           if(res){
               toast.success("login successfully !",{position:"top-center", autoClose:3000})
                 dispatch(setIsLogin(true));
                 localStorage.setItem("login",true);
                 dispatch(setCurrentUser(res))
                 navigate("/")

           }
        }
    }
    catch(e){
       console.log(e);
       toast.warning("invalid credential",{position:"top-center", autoClose:3000});
    }
  }


  return (
    <div className="bg-gradient-to-b from-[#23282e] to-black h-screen flex justify-center items-center">
      <div className="text-white flex flex-col w-[400px] max-md:w-4/5 p-4 gap-1  bg-gradient-to-b from-[#FC9F16] to-[#11182A] rounded-lg">
        <h2 className="text-2xl mb-4 ">Login to Leetcode</h2>
        <label>Your Email</label>
        <input type="email" className="p-2 rounded-md bg-[#4B5563] mb-4" placeholder="demo@gmail.com" ref={mailID}/>
        <label>Your Password</label>
        <input type="password" className="p-2 rounded-md bg-[#4B5563] mb-4" placeholder="......." ref={password}/>
        
        
        <button className="bg-yellow-600 text-white p-3 rounded-lg mb-2" onClick={onLoginHandler}>Login</button>
        <span className="text-right mb-4 text-sm text-yellow-700 cursor-pointer" >forget password?</span>
        <span className="text-left text-sm mb-4">Not Registered?<span className="text-blue-700 cursor-pointer"><Link to="/signup">Create Account</Link></span></span>
      </div>
    </div>
  );
};

export default LoginPage;
