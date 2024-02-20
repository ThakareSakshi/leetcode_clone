import React from 'react'
import Header from '../Components/Header';
import ProblemList from '../Components/ProblemList';
import Dummy from '../Components/Dummy';

const HomePage = () => {
  return (
    <div>
      <Header/>
      {/* <Dummy/> */}
      
      <ProblemList/>
      
    </div>
  )
}

export default HomePage;
