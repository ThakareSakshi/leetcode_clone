import React, { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { setCurrentProblem, setIsSuccess, setOutputCode } from "../store/compilerSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getFirestore,runTransaction ,doc,
  getDoc,
  query} from "firebase/firestore";
import app from "../Data/firebase";




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
    console.log(isLogin)
    if(isLogin== false ){
        toast.error("you must be login to run code",{position:"top-center", autoClose:3000});
    }else{
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            source_code: inputcode,
            stdin:"",
            language_id:63 ,
          }),
        }
      );

      // outputText.innerHTML += "Submission Created ...\n";
      dispatch(setOutputCode(outputText+"Submission Created ...\n"))
      const jsonResponse = await response.json();

      console.log(jsonResponse)
      let jsonGetSolution = {
        status: { description: "Queue" },
        stderr: null,
        compile_output: null,
      };
      while (
        jsonGetSolution.status.description !== "Accepted" &&
        jsonGetSolution.stderr == null &&
        jsonGetSolution.compile_output == null
      ) {
        // outputText.innerHTML = ;
        dispatch(setOutputCode(`Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`))
        if (jsonResponse.token) {
          let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
          const getSolution = await fetch(url, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": "cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
              "content-type": "application/json",
            },
          });
          jsonGetSolution = await getSolution.json();
          console.log(jsonGetSolution);
        }
      }
      
      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);
        console.log(output,stdOut)
        console.log(output===stdOut)
        if(output==stdOut){
          onSolved();
          dispatch(setIsSuccess(true));
          setTimeout(()=>{
            dispatch(setIsSuccess(false))
          },5000)
          
        }
       dispatch(setOutputCode(`Results :\n ${output} \n Execution Time : ${jsonGetSolution.time} Secs \n Memory used : ${jsonGetSolution.memory} bytes`))
      } else if (jsonGetSolution.stderr) {
        const error = atob(jsonGetSolution.stderr);
       
        dispatch(setOutputCode( `\n Error :${error}`))
      } else {
        const compilation_error = atob(jsonGetSolution.compile_output);
      
        dispatch(setOutputCode(`\n Error :${compilation_error}`));
      }
     };
    }
  

  const submitCode=()=>{
    if(!isLogin){
        toast.error("login to submit code");
    }
  }
  return (
    <div className="p-2 flex justify-between">

      <div className="flex gap-4 items-center text-white font-light">
        <img src="/leetcode.png" className="h-8" />
        <i className="fa-solid fa-bars text-gray-200"></i>
        <span className="text-white font-semibold cursor-pointer" onClick={redirectToHome}> Problem List</span>
        <button onClick={decrement}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={increment}><i className="fa-solid fa-angle-right"></i></button>
      </div>

      <div className="flex gap-4">
        <button  className="px-2 text-white p-1 rounded-md bg-[#262626]" onClick={RunCode}><i className="fa-solid fa-play"></i> Run</button>
        <button className="px-2 text-green-700 p-1 rounded-md bg-[#262626]" onClick={RunCode}><i className="fa-solid fa-cloud-arrow-up"></i> Submit</button>
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
