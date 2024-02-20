import React from 'react'
import { problemSet } from '../Data/problems'
import ProblemRow from './ProblemRow'

const ProblemList = () => {
  return (
  <div className=' p-10 flex justify-center items-center flex-col'>
    <div>
      <h2 className='text-center text-3xl text-white font-semibold'>
        Problems
      </h2>
    </div>
     <table className='text-white w-2/3 m-5'>
  <thead>
  <tr className=' m-2  p-5 bg-[#2A2A2A]'>
    <th className='text-[#b9b9b9] font-normal text-sm p-4'>Sr.</th>
    <th className='text-[#b9b9b9] font-normal text-sm p-4'>Title</th>
    <th className='text-[#b9b9b9] font-normal text-sm p-4'>Solution</th>
    <th className='text-[#b9b9b9] font-normal text-sm p-4'>Difficulty</th>
    
   </tr>
  </thead>
  <tbody>
  {
    problemSet.map((problem,index)=> <ProblemRow key={index} {...problem}/>)
   }
  </tbody>
   </table>
  </div>
  )
}

export default ProblemList
