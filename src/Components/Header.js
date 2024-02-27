import React,{useContext} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Data/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { setCurrentUser, setIsLogin } from "../store/AuthSlice";


const Header = () => {

const isLogin=useSelector((state)=>state.auth.isLogin);
const currentUser=useSelector((state)=>state.auth.currentUser);
const navigate=useNavigate();
const dispatch=useDispatch();

const redirectToLogin=()=>{
  navigate("/login")
}

const logout=()=>{
  signOut(auth).then(()=>{
    toast.success("logout successfully")
    dispatch(setCurrentUser(""));
    dispatch(setIsLogin(false));
    
  }).catch((e)=>{
    toast.warning("failed to logout",{position:"top-center", autoClose:3000})
  })
}
  return (
    <nav className="p-2 bg-[#282828] flex  gap-4 items-center justify-between px-20 max-md:flex-col">
      <div className="flex items-center">
        <img src="leetcode.png" className="h-10 px-2" alt="leetcode logo" />
        <span className="text-white font-semibold text-xl"></span>
        <ul className="flex  gap-6 text-white">
        <li>Leetcode</li>
        
      </ul>
      </div>
    
      <div  className="flex">
      
      {
       isLogin ? <div className="flex text-white gap-4">{currentUser.user.email}<img className="rounded-full h-8" src="/users.png"/> <button className="text-orange-500" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></button></div>:<div className="p-2 text-white bg-slate-800 rounded-md cursor-pointer" onClick={redirectToLogin}>Sign In</div>
      }
      </div>
    </nav>
  );
};

export default Header;
