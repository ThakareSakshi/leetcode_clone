import React, { useEffect } from 'react'
import Editor ,{loader} from "@monaco-editor/react";
import {  useDispatch, useSelector } from 'react-redux';
import { setInputCode } from '../store/compilerSlice';



const Compiler = () => {

    const inputCode=useSelector((state)=>state.compiler.inputCode);
    const dispatch=useDispatch();
    const outputCode=useSelector((state)=>state.compiler.outputCode);
    

    
    const changeInputCode=(newcode)=>{
      
        dispatch(setInputCode(newcode))
    }

    useEffect(()=>{
      loader.init().then((monaco) => {
        monaco.editor.defineTheme('myTheme', {
            base: 'vs-dark',
            inherit: true,
            rules: [
            
            ],
            colors: {
                'editor.background': '#262626',
            },
        });
    });
    },[])
  return (
    <div className="overlay  overflow-scroll w-full  shadow-4xl  rounded-lg min-w-[400px] max-md:min-w-full">
      <div className='p-1 bg-[#333333] w-full'>
        <span className='text-white font-normal text-sm px-2'><i className="fa-solid fa-code text-green-500"></i> Code</span>
        <select className='bg-inherit text-gray-400 mx-3'>
        <option value="63">Javascript</option>
         
        </select>
      </div>
 
  <Editor
        height="50vh"
        width={`100%`}
        language={"java"}
        value={inputCode}
        theme='myTheme'
        defaultValue={" "}
        onChange={changeInputCode}
      
      />
 
    
    </div>
  )
}

export default Compiler
