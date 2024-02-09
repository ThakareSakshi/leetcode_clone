import React from 'react'
import { problemSet } from '../Data/problems'
import ProblemRow from './ProblemRow'

const ProblemList = () => {
  return (
   <table className='text-white w-2/3 m-5'>
  <thead>
  <tr className=' m-2  p-5 even:bg-[#2A2A2A]'>
    <th className='text-[#b9b9b9] font-normal text-sm'>status</th>
    <th className='text-[#b9b9b9] font-normal text-sm'>title</th>
    <th className='text-[#b9b9b9] font-normal text-sm'>solution</th>
    <th className='text-[#b9b9b9] font-normal text-sm'>difficulty</th>
    
   </tr>
  </thead>
  <tbody>
  {
    problemSet.map((problem,index)=> <ProblemRow key={index} {...problem}/>)
   }
  </tbody>
   </table>
  )
}

export default ProblemList
