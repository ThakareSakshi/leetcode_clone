import React from 'react'

const Case = ({index, input ,output,setTestCase}) => {
  return (
    <div className='bg-[#262626] p-2 rounded-md text-white cursor-pointer' onClick={()=>setTestCase(index)}> Testcase {index}</div>
       
  )
}

export default Case
