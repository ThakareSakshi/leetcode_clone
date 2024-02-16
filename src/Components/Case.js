import React from 'react'

const Case = ({index, input ,output,setTestCase}) => {
  return (
    <div className='bg-[#333333] p-2 rounded-md text-white cursor-pointer' onClick={()=>setTestCase(index)}> Case {index}</div>
       
  )
}

export default Case
