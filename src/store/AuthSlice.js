import { createSlice } from "@reduxjs/toolkit";

export  const authSlice=createSlice(
    {
       name:"auth",
       initialState:{
        currentUser:JSON.parse(localStorage.getItem("currentuser")) || "",
        userData:"",
        isLogin:JSON.parse(localStorage.getItem("login")) || false,
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
        setUserData:(state,action)=>{
          state.userData=action.payload
        }
      }
    }
)

export const { setCurrentUser,setIsLogin,setUserData}=authSlice.actions;
export default authSlice.reducer;

