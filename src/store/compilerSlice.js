import { createSlice } from "@reduxjs/toolkit";

export  const compilerSlice=createSlice(
    {
       name:"compiler",
       initialState:{
        inputCode:"",
        outputCode:"",
        currentProblem:4,
        AllProblemsData:[],
        isSuccess:false,
        stdOutput:""
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
        },
        setIsSuccess:(state,action)=>{
          state.isSuccess=action.payload
        }
        ,
        setStdOutput:(state,action)=>{
          state.stdOutput=action.payload
        }
        

       }
    }
)

export const {setInputCode,setCurrentProblem,setOutputCode,setAllProblemsData,setIsSuccess,setStdOutput}=compilerSlice.actions;
export default compilerSlice.reducer;