import React, { useEffect } from "react";
import ProblemStatement from "../Components/ProblemStatement";
import Compiler from "../Components/Compiler";
import CompilerHeader from "../Components/CompilerHeader";
import Split from "react-split";
import { useParams } from "react-router-dom";
import TestCases from "../Components/testCases";

const Editorpage = () => {
  const { problemID } = useParams();

  console.log(problemID);

  return (
    <div className="">
      <CompilerHeader />
      {/* <div className='flex'> */}
      <Split className="split">
        <ProblemStatement id={problemID} />
        <div className="flex flex-col w-1/2">
          <Split direction="vertical" sizes={[60, 40]}>
            <Compiler />
            <TestCases />
          </Split>
        </div>
      </Split>
      {/* </div> */}
    </div>
  );
};

export default Editorpage;