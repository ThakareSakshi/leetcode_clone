import { createSlice } from "@reduxjs/toolkit";

export  const authSlice=createSlice(
    {
       name:"auth",
       initialState:{
        currentUser:JSON.parse(localStorage.getItem("currentuser")) || "",
        uid:"",
        isLogin:localStorage.getItem("login") || false,
       },
       reducers:{

         setCurrentUser:(state,action)=>{
           state.currentUser=action.payload;
           localStorage.setItem("currentuser",JSON.stringify(action.payload));
        },
        setIsLogin:(state,action)=>{
          state.isLogin=action.payload
          localStorage.setItem("login",action.payload);
        },
      }
    }
)

export const { setCurrentUser,setIsLogin}=authSlice.actions;
export default authSlice.reducer;

