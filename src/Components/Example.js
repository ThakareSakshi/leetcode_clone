import React from 'react'

const Example = (props) => {
  return (
    <div >
        <h2 className=' font-bold text-white '>Example {props.index} :</h2>
        <div className='px-4 border-l-2 border-solid border-gray-500 my-4'>
            <span className='text-white font-bold'>Input : </span><span className='text-gray-200 text-sm'> {props.input}</span><br/>
            <span className='text-white font-bold'>Output : </span><span className='text-gray-200 text-sm'> {props.output}</span>
        </div>
      
    </div>
  )
}

export default Example
