import React, { useContext, useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { setCurrentProblem, setIsSuccess, setOutputCode } from "../store/compilerSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getFirestore,runTransaction ,doc,
  getDoc,
  query} from "firebase/firestore";
import app from "../Data/firebase";
import {problemDesc} from "../Data/ProblemsDescription"
import ld from "lodash"
import { ProblemsContext } from "../Context/CompilerContext";




const CompilerHeader = () => {
  const db=getFirestore(app)
  const currentProblemId=useSelector((state)=>state.compiler.currentProblem)
  const currentUser=useSelector((state)=>state.auth.currentUser)
  const isLogin=useSelector((state)=>state.auth.isLogin)
  const inputcode=useSelector((state)=>state.compiler.inputCode)
  const outputText=useSelector((state)=>state.compiler.outputCode)
  const stdOut=useSelector((state)=>state.compiler.stdOutput);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [time,setTime]=useState(0);
  const [showTimer,setShowTimer]=useState(false);

  const problem=problemDesc.filter(problem=> problem.id ==currentProblemId);
  const handlerFunction=problem[0].handlerFunction;
  const testCtx=useContext(ProblemsContext);
 
 

  const increment=()=>{
    const count=currentProblemId+1;
    if(count<13){
      dispatch(setCurrentProblem(count));
    }
  }
    const decrement=()=>{
      const count=currentProblemId-1;
      if(count>0){
        dispatch(setCurrentProblem(count));
      }
  }

  const redirectToHome=()=>{
    navigate("/")
  }

  const redirectToLogin=()=>{
    navigate("/login")
  }

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      
      
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);


  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const onSolved=async()=>{
    await runTransaction(db, async (transaction) => {
      const userRef = doc(db, "users",currentUser.user.uid );
      const userDoc = await transaction.get(userRef);
      if(userDoc.exists()){
        transaction.update(userRef, {
          solvedProblems:[ ...userDoc.data().solvedProblems,currentProblemId],
         
        });
      }
    })
  
  }


  const resetTimer=()=>{
    setTime(0);
  }


  const RunCode=async()=>{
   
    if(isLogin== false ){
        toast.error("you must be login to run code",{position:"top-center", autoClose:3000});
     }
     try{
     
      const cb = new Function(`return ${inputcode}`)();
     
			const handler =handlerFunction;
      

      if(typeof handler==="function"){
        let result=handler(cb);
        testCtx.setTestResult(result);
        if(result===true){
        toast.success("compiled successFully");
          
        }
        else{
          dispatch(setOutputCode(result));
          toast.error(result,{position:"top-center", autoClose:3000});
         
        }
      }
    }catch(e){
      console.log(e);
    }
      
     }
  

  const submitCode=async ()=>{
    if(isLogin== false ){
      toast.error("you must be login to run code",{position:"top-center", autoClose:3000});
  }
    try{
      console.log("code submitted");
      const cb =await new Function(`return ${inputcode}`)();
      console.log(cb);
			const handler = handlerFunction;
      console.log("type of handler :",typeof handler)

      if(typeof handler==="function"){
        let result=handler(cb);
        console.log(result);
        if(result===true){
          console.log("compiled Successfully");
          onSolved();
          dispatch(setIsSuccess(true));
          setTimeout(()=>{
            dispatch(setIsSuccess(false))
          },10000);
          localStorage.setItem(currentProblemId,JSON.stringify(inputcode));
        }
        else{
          dispatch(setOutputCode(result));
          toast.error(result,{position:"top-center", autoClose:3000});
         
        }
      }
    }catch(e){
      console.log(e);
      dispatch(setOutputCode(e));
    }
  }
  return (
    <div className="p-2 flex justify-between w-full max-md:flex-wrap max-md:items-center ">

      <div className="flex gap-4 items-center text-white font-light">
        <img src="/leetcode.png" className="h-8" />
        <i className="fa-solid fa-bars text-gray-200"></i>
        <span className="text-white font-semibold cursor-pointer" onClick={redirectToHome}> Problem List</span>
        <button onClick={decrement}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={increment}><i className="fa-solid fa-angle-right"></i></button>
      </div>

      <div className="flex gap-4">
        <button  className="px-2 text-white p-1 rounded-md bg-[#262626]" onClick={RunCode}><i className="fa-solid fa-play"></i> Run</button>
        <button className="px-2 text-green-700 p-1 rounded-md bg-[#262626]" onClick={submitCode}><i className="fa-solid fa-cloud-arrow-up"></i> Submit</button>
        <button className="px-2 text-gray-500 p-1 rounded-md bg-[#262626] flex items-center gap-2">
          {
            
           showTimer?<div className="flex items-center gap-2"> 
            <div onClick={startAndStop}>
          {
            isRunning?<><i class="fa-solid fa-pause"></i></>:<><i class="fa-solid fa-play"></i></>
           }
          </div>{hours}:{minutes.toString().padStart(2, "0")}:
           {seconds.toString().padStart(2, "0")} <i class="fa-solid fa-rotate" onClick={resetTimer}></i>
         
           </div>:<></>
          }
          <i className="fa-solid fa-stopwatch-20"  onClick={()=>{setShowTimer(!showTimer)}}></i>
          </button>
      </div>

      <div>
        {
         
         isLogin && isLogin==true ? <div className="flex text-white gap-4">{currentUser.user.email}<img className="rounded-full h-8" src="/users.png"/></div>:<span className="px-2 text-white p-1 rounded-md bg-[#262626] cursor-pointer" onClick={redirectToLogin}>Sign-in</span>
        }
      </div>
    </div>
  );
};

export default CompilerHeader;
