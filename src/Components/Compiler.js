import React from 'react'
import Editor from "@monaco-editor/react";
import {  useDispatch, useSelector } from 'react-redux';
import { setInputCode } from '../store/compilerSlice';

const Compiler = () => {

    const inputCode=useSelector((state)=>state.compiler.inputCode);
    const dispatch=useDispatch();
    

    
    const changeInputCode=(newcode)=>{
      
        dispatch(setInputCode(newcode))
    }
  return (
    <div className="overlay  overflow-hidden w-full  shadow-4xl m-2 rounded-lg">
      <div className='p-1 bg-[#262626] w-full'>
        <span className='text-white font-normal text-sm px-2'><i className="fa-solid fa-code text-green-500"></i> Code</span>
        <select className='bg-inherit text-gray-400 mx-3'>
        <option value="62">Java</option>
          <option value="50">C</option>
          <option value="54">C++</option>
          
          <option value="72">Python</option>
        </select>
      </div>
      <Editor
        height="50vh"
        width={`100%`}
        language={"javascript"}
        value={inputCode}
         theme='vs-dark'
        defaultValue=""
        onChange={changeInputCode}
      
      />
    
    </div>
  )
}

export default Compiler