import React, { useState } from 'react'
import Editor ,{loader} from "@monaco-editor/react";
import { useSelector ,} from 'react-redux'
import { useEffect } from 'react';

const Submissions = () => {
    const currentProblem=useSelector((state)=>state.compiler.currentProblem);
    const [Solution,setSolution]=useState(localStorage.getItem(currentProblem) || "");


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
    
    <div className=" bg-[#262626] p-2  rounded-lg overflow-y-scroll text-white ">
        {
            Solution?<>
           <h1 className='text-lg text-green-500'>Submitted Code</h1>

            
  <Editor
        height="30vh"
        width={`100%`}
        language={"java"}
        
        theme='myTheme'
        defaultValue={JSON.parse(Solution)}
        
      
      />
            </>:<span className='text-2xl text-center'>No submissions</span>
        }
      
    </div>
  )
}

export default Submissions
