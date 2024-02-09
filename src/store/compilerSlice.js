import { createSlice } from "@reduxjs/toolkit";

export  const compilerSlice=createSlice(
    {
       name:"compiler",
       initialState:{
        inputCode:"",
        outputCode:"",
        currentProblem:1,
        AllProblemsData:[]
       },
       reducers:{

         setInputCode:(state,action)=>{
           state.inputCode=action.payload;
        },
        setOutputCode:(state,action)=>{
          state.outputCode=action.payload
        },
        setCurrentProblem:(state,action)=>{
          state.currentProblem=action.payload
        },
        setAllProblemsData:(state,action)=>{
          state.AllProblemsData=action.payload
        }
        

       }
    }
)

export const {setInputCode,setCurrentProblem,setOutputCode,setAllProblemsData}=compilerSlice.actions;
export default compilerSlice.reducer;