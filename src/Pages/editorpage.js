import React, { useEffect } from "react";
import ProblemStatement from "../Components/ProblemStatement";
import Compiler from "../Components/Compiler";
import CompilerHeader from "../Components/CompilerHeader";
import Split from "react-split";
import { useParams } from "react-router-dom";
import TestCases from "../Components/testCases";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

const Editorpage = () => {
  const { problemID } = useParams();
  const isSuccess=useSelector((state)=>state.compiler.isSuccess);

  console.log(problemID);

  return (
    <div className="h-full overflow-x-scroll ">
      {
        isSuccess && <Confetti
        width={800}
        height={600}
        numberOfPieces={200}
        
      />
      }
      <CompilerHeader />
     
      <Split className="split">
        <ProblemStatement id={problemID} />
        <div className="flex flex-col w-1/2 min-w-[400px]">
          <Split direction="vertical" >
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
