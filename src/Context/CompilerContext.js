import { createContext} from "react";
import { useState } from "react";

export const ProblemsContext=createContext();




const CompilerContext = (props) => {

    const [testResult,setTestResult]=useState([]);

    const data={
      testResult,
      setTestResult,
    }
  return (
    <ProblemsContext.Provider value={data}>
        {
            props.children
        }
    </ProblemsContext.Provider>
  )
}

export default CompilerContext
