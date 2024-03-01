import React, { useState } from 'react'
import { problemSet } from '../Data/problems'
import ProblemRow from './ProblemRow'

const ProblemList = () => {

  const [filterdList,setFilteredList]=useState(problemSet);
 


  const onSearch=( input)=>{
       const newList=problemSet.filter((problem)=>problem.title.toLowerCase().includes(input.toLowerCase()));
       setFilteredList(newList);
  }

  const OnFiltered=(difficulty)=>{
     
    const newList=problemSet.filter((problem)=>problem.difficulty===difficulty);
    setFilteredList(newList);
  }

  return (
  <div className=' p-10 flex justify-center items-center flex-col'>
    <div>
      <h2 className='text-center text-3xl text-white font-semibold'>
        Problems
      </h2>
    </div>
    <div className='flex justify-between  items-center flex-wrap gap-2 w-2/3 max-md:w-full '>
      <input type="search" placeholder='Search...' className='p-1 rounded-full bg-[#2A2A2A] text-[#b9b9b9] outline-none px-4' onChange={(e)=>{onSearch(e.target.value)}}/>
      <select className='p-1 rounded-full bg-[#2A2A2A] text-[#b9b9b9] outline-none px-4' onChange={(e)=>{OnFiltered(e.target.value)}}>
        <option value="none" >Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
     <table className='text-white w-2/3  max-md:w-full m-5'>
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
    filterdList.map((problem,index)=> <ProblemRow key={index} {...problem}/>)
   }
  </tbody>
   </table>
  </div>
  )
}

export default ProblemList
