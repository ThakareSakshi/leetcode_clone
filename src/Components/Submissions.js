import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Submissions = () => {
    const currentProblem=useSelector((state)=>state.compiler.currentProblem);
    const [Solution,setSolution]=useState(localStorage.getItem(currentProblem) || "")
  return (
    
    <div className=" bg-[#262626] p-2  rounded-lg overflow-y-scroll text-white ">
        {
            Solution?<>
            <span>
                {
           JSON.parse(Solution)
            }</span></>:<span className='text-2xl text-center'>No submissions</span>
        }
      
    </div>
  )
}

export default Submissions
