import React, { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { problemDesc } from "../Data/ProblemsDescription";
import Example from "./Example";
import { toast } from "react-toastify";
import { doc, getDoc,query,collection,getDocs, where } from "firebase/firestore";
import app from "../Data/firebase";
import { getFirestore } from "firebase/firestore";
import { setAllProblemsData } from "../store/compilerSlice";

const ProblemStatement = ({ id }) => {

  const db=getFirestore(app);
  const dispatch=useDispatch();
  const AllProblemsData=useSelector((state)=>state.compiler.AllProblemsData)
  const currentProblemId = useSelector(
    (state) => state.compiler.currentProblem
  );
  const isLogin=useSelector((state)=>state.auth.isLogin);

  const data = problemDesc.filter((data) => data.id == currentProblemId);
  const [color, setColor] = useState("red");


  

  useEffect(() => {
    if (data[0].difficulty == "Easy") {
      setColor("green");
    } else if (data[0].difficulty == "Medium") {
      setColor("orange");
    }else{
      setColor("red");
    }

    const getDataFromDb=async()=>{
      const q = query(collection(db, "problems"),where("id","==",id))
     
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dispatch(setAllProblemsData(doc.data()))
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

      
    }
    getDataFromDb();
  }, [currentProblemId]);

 
  const LikeQuestion=()=>{
    if(isLogin===false){
      toast.error("Login to Like ",{position:"top-center", autoClose:3000});
    }
  }

  const disLikeQuestion=()=>{
    if(isLogin===false){
      toast.error("Login to disLike ",{position:"top-center", autoClose:3000});
    }
  }

  return (
    <div className="w-1/2 bg-[#262626] p-2 m-2 rounded-lg overflow-y-scroll ">
      <h1 className="text-2xl font-bold text-white m-2">{data[0].title}</h1>

      <div className=" flex item-center gap-4 ">
      <span  className="px-2 bg-[#3a3a3a] rounded-xl" style={{ color: color ,fontSize:"14px", }}>{data[0].difficulty}</span>
      <span onClick={LikeQuestion} className="text-gray-400"><i className="fa-solid fa-thumbs-up text-gray-400"></i> {AllProblemsData.like}</span>
      <span onClick={disLikeQuestion} className="text-gray-400"><i className="fa-solid fa-thumbs-down text-gray-400"></i> {AllProblemsData.dislike}</span>
      </div>

      <p className=" p-2 text-sm text-gray-300">{data[0].description}</p>
       
       {/* ------------examples-------------------- */}
      {
      data[0].examples.map((ex, index) => (
        <Example index={index} {...ex} />
      ))
      }


      {/* ---------constraints----------------  */}
      <h2 className="font-bold text-white ">constraints :</h2>
      <div className="p-4">
        <ul className="list-disc text-white li">
          {
            data[0].constraints.map((constraint) => {
              return (
                <li className=" m-2  text-white text-sm bg-neutral-700 rounded-md px-2 w-fit list-item">
                  {constraint.desc}
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ProblemStatement;
