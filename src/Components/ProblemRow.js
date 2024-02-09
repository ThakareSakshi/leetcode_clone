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
     }
   },[])

    const clickEventHandler=()=>{
      dispatch(setCurrentProblem(props.id));
      navigate("/compiler/"+props.id)
    }

  return (
    <tr className='p-6 m-2 w-full even:bg-[#2A2A2A] cursor-pointer' onClick={clickEventHandler}>
        <td className='p-3 text-sm'>{props.id}</td>
        <td className='p-3 text-sm' >{props.title}</td>
        <td className='p-3 text-sm'>solution</td>
        <td className='p-3 text-sm' style={{color:color}}>{props.difficulty}</td>
        
    </tr>
  )
}

export default ProblemRow
