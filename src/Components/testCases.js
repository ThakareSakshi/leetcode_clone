import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setOutputCode } from '../store/compilerSlice';
import { useContext } from 'react';
import { problemDesc } from '../Data/ProblemsDescription';
import Case from './Case';
import { useState } from 'react';
import { ProblemsContext } from '../Context/CompilerContext';


const TestCases = () => {
    const currentProblem=useSelector((state)=>state.compiler.currentProblem);
    const data=problemDesc.filter((data)=>data.id==currentProblem);
    const outputtext=useSelector((state)=>state.compiler.outputCode);
    const isSuccess=useSelector((state)=>state.compiler.isSuccess)
    const dispatch=useDispatch();
    const [testcase,setTestCase]=useState(0);

    const testCtx=useContext(ProblemsContext);
   
  

   
  return (
    <div className='w-full  bg-[#262626] rounded-lg overflow-scroll h-auto overflow-x-auto'>
        
       <div className='text-white p-2 bg-[#333333]'><h2 className='text-white font-normal text-sm'><i className="fa-regular fa-square-check text-green-500"></i> Testcase</h2></div>
       {
          isSuccess? <div className='text-xl font-semibold text-green-700 p-2 px-3'> Accepted </div>:null
        }
       <div className='flex gap-2 bg-[#262626] p-3'>
        {
          data[0].examples.map((test,index)=>{
             return   <Case key={"c"+index} index={index} {...test} setTestCase={setTestCase} passed={testCtx.testResult ? testCtx.testResult[index]: null}/> })
        }
       </div>
      {
        testCtx.testResult.length ==0 ?
        <div className='text-white bg-[#262626] p-2'>
        <span>Input:</span>
        <div className='bg-[#333333] rounded-md p-2 my-1'>{data[0].examples[testcase].input}</div>
        <span>Output:</span>
        <div className='bg-[#333333] rounded-md p-2 my-1'>{data[0].examples[testcase].output}</div>
      </div>
        :

      <div className='text-white bg-[#262626] p-2'>
        <span>Input:</span>
        <div className='bg-[#333333] rounded-md p-2 my-1'>{data[0].examples[testcase].input}</div>
        <span>Your Output:</span>
        
        <div className='bg-[#333333] rounded-md p-2 my-1 h-8'>{JSON.stringify(testCtx.testResult[testcase].output)}</div>

        <span>expected Output:</span>
        
        <div className='bg-[#333333] rounded-md p-2 my-1'>{JSON.stringify(testCtx.testResult[testcase].expected)}</div>
      </div>
      }
       <textarea value={outputtext} className='w-full  bg-[#262626] outline-none  text-red-500' readOnly="readOnly"></textarea>
      
    </div>
  )
}

export default TestCases
