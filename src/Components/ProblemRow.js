import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setCurrentProblem } from '../store/compilerSlice';


const ProblemRow = (props) => {

  
    const [color,setcolor]=useState("green");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    

   useEffect(()=>{
    if(props.difficulty=="Hard"){
        setcolor("red");
     }else if(props.difficulty=="Medium"){
         setcolor("#FFA116")
     }else if(props.difficulty=="Easy"){
      setcolor("green")
     }
   })

    const clickEventHandler=()=>{
      dispatch(setCurrentProblem(props.id));
      navigate("/compiler/"+props.id)
    }

  return (
    <tr className=' m-2 w-full even:bg-[#2A2A2A] cursor-pointer' onClick={clickEventHandler}>
        <td className='p-4 text-sm'>{props.id}</td>
        <td className='p-4 text-sm' >{props.title}</td>
        <td className='p-4 text-sm'><a href={props.solution}>solution</a></td>
        <td className='p-4 text-sm' style={{color:color}}>{props.difficulty}</td>
        
    </tr>
  )
}

export default ProblemRow
