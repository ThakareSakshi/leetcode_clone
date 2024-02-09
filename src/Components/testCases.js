import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { setOutputCode } from '../store/compilerSlice';

const TestCases = () => {

    const outputtext=useSelector((state)=>state.compiler.outputCode);
    const dispatch=useDispatch();

   
  return (
    <div className='w-full m-2 bg-[#262626] rounded-lg'>
       <div className='text-white p-2'><h2 className='text-white font-normal text-sm'><i className="fa-regular fa-square-check text-green-500"></i> Testcase</h2></div>
      <textarea value={outputtext} className='w-full h-40 bg-[#1E1E1E]' readOnly="readOnly"></textarea>
    </div>
  )
}

export default TestCases
