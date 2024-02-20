import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { setOutputCode } from '../store/compilerSlice';
import { UseSelector } from 'react-redux';
import { problemDesc } from '../Data/ProblemsDescription';
import Case from './Case';
import { useState } from 'react';


const TestCases = () => {
    const currentProblem=useSelector((state)=>state.compiler.currentProblem);
    const data=problemDesc.filter((data)=>data.id==currentProblem);
    const outputtext=useSelector((state)=>state.compiler.outputCode);
    const isSuccess=useSelector((state)=>state.compiler.isSuccess)
    const dispatch=useDispatch();
    const [testcase,setTestCase]=useState(0);
    console.log("data",data)

   
  return (
    <div className='w-full  bg-[#262626] rounded-lg overflow-scroll h-auto overflow-x-auto'>
        
       <div className='text-white p-2 bg-[#333333]'><h2 className='text-white font-normal text-sm'><i className="fa-regular fa-square-check text-green-500"></i> Testcase</h2></div>
       {
          isSuccess? <div className='text-xl font-semibold text-green-700 p-2 px-3'> Accepted </div>:null
        }
       <div className='flex gap-2 bg-[#262626] p-3'>
        {
          data[0].examples.map((test,index)=>{
             return  <Case index={index} {...test} setTestCase={setTestCase}/> })
        }
       </div>
       <div className='text-white bg-[#262626] p-2'>
         <span>Input:</span>
         <div className='bg-[#333333] rounded-md p-2 my-1'>{data[0].examples[testcase].input}</div>
         <span>Output:</span>
         <div className='bg-[#333333] rounded-md p-2 my-1'>{data[0].examples[testcase].output}</div>
       </div>
      <textarea value={outputtext} className='w-full  bg-[#262626] text-white h-auto min-h-40' readOnly="readOnly"></textarea>
    </div>
  )
}

export default TestCases
