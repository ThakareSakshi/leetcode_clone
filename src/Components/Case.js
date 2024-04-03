import React from 'react'

const Case = ({index,setTestCase,passed}) => {
  return (
    <div className='bg-[#333333] p-2 rounded-md text-white cursor-pointer flex items-center gap-2' onClick={()=>setTestCase(index)}> 
    <div className=" p-[1px]   h-[5px] w-[5px] rounded-full" style={{backgroundColor:(passed ? passed.status? "green": "red":"#333333")}}></div> 
    Case {index}</div>
       
  )
}

export default Case
