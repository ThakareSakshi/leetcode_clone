import React, { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { problemDesc } from "../Data/ProblemsDescription";
import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import Example from "./Example";
import { toast } from "react-toastify";
import {
  doc,
  getDoc,
  query,
  collection,
  getDocs,
  where,
  runTransaction,
} from "firebase/firestore";
import app, { auth } from "../Data/firebase";
import { getFirestore } from "firebase/firestore";
import { setAllProblemsData } from "../store/compilerSlice";
// import { useAuthState } from "react-firebase-hooks";

const ProblemStatement = ({ id }) => {
  const db = getFirestore(app);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const AllProblemsData = useSelector(
    (state) => state.compiler.AllProblemsData
  );

  const currentProblemId = useSelector(
    (state) => state.compiler.currentProblem
  ).toString();

  const isLogin = useSelector((state) => state.auth.isLogin);

  const data = problemDesc.filter((data) => data.id == currentProblemId);
  
  const [color, setColor] = useState("red");
  const [Udata, setUData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });

  useEffect(() => {
    try {
      if (data[0].difficulty == "Easy") {
        setColor("green");
      } else if (data[0].difficulty == "Medium") {
        setColor("orange");
      } else {
        setColor("red");
      }

      const getDataFromDb = async () => {
        const q = query(
          collection(db, "problems"),
          where("id", "==", currentProblemId)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setAllProblemsData(doc.data()));

          console.log(doc.id, " => ", doc.data());
        });
      };
      getDataFromDb();
    } catch (e) {
      console.log(e);
    }

    if (user) {
      try {
        getUsersDataOnProblem();
      } catch (e) {
        console.log(e);
      }
    }
  }, [currentProblemId]);

  //----------------getuserdata----------------------
  const getUsersDataOnProblem = async () => {
    const userRef = doc(db, "users", user.user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const {
        solvedProblems,
        likedProblems,
        dislikedProblems,
        starredProblems,
      } = data;
      setUData({
        liked: likedProblems.includes(currentProblemId),
        disliked: dislikedProblems.includes(currentProblemId),
        starred: starredProblems.includes(currentProblemId),
        solved: solvedProblems.includes(currentProblemId),
      });
    }
  };

  const LikeQuestion = async () => {
    const { liked, disliked, solved, setData, starred } = Udata;
    if (isLogin === false) {
      toast.error("you must Login to Like ", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      console.log("like clicked", user.user.uid);

      await runTransaction(db, async (transaction) => {
        const userRef = doc(db, "users", user.user.uid);
        const problemRef = doc(db, "problems", currentProblemId);
        const userDoc = await transaction.get(userRef);
        const problemDoc = await transaction.get(problemRef);
        if (!problemDoc.exists() && !userDoc.exists()) {
          throw "Document does not exist!";
        } else {
          if (liked) {
            // remove problem id from likedProblems on user document, decrement likes on problem document
            transaction.update(userRef, {
              likedProblems: userDoc
                .data()
                .likedProblems.filter((pid) => pid !== currentProblemId),
            });
            transaction.update(problemRef, {
              like: parseInt(problemDoc.data().like) - 1,
            });

            dispatch(
              setAllProblemsData(
                { ...AllProblemsData, like: parseInt(AllProblemsData.like) - 1}
               
              )
            );
            setUData((prev) => ({ ...prev, liked: false }));
          } else if (disliked) {
            transaction.update(userRef, {
              likedProblems: [
                ...userDoc.data().likedProblems,
                currentProblemId,
              ],
              dislikedProblems: userDoc
                .data()
                .dislikedProblems.filter((pid) => pid !== currentProblemId),
            });
            transaction.update(problemRef, {
              like:parseInt(problemDoc.data().like) + 1,
              dislike: parseInt(problemDoc.data().dislike) - 1,
            });

            dispatch(
              setAllProblemsData(
              { ...AllProblemsData, like: parseInt(AllProblemsData.like) + 1, dislike: parseInt(AllProblemsData.dislike )- 1 }
                 
              )
            );
            setUData((prev) => ({ ...prev, liked: true, disliked: false }));
          } else {
            transaction.update(userRef, {
              likedProblems: [
                ...userDoc.data().likedProblems,
                currentProblemId,
              ],
            });
            transaction.update(problemRef, {
             like: parseInt(problemDoc.data().like) + 1,
            });
            dispatch(
              setAllProblemsData(
                {...AllProblemsData, like:parseInt( AllProblemsData.like )+ 1 }
              )
            );
            setUData((prev) => ({ ...prev, liked: true }));
          }
        }
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  };

  const disLikeQuestion = async() => {
    const { liked, disliked, solved, setData, starred } = Udata;
    if (isLogin === false) {
      toast.error("you must Login to Like ", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      console.log("like clicked", user.user.uid);

      await runTransaction(db, async (transaction) => {
        const userRef = doc(db, "users", user.user.uid);
        const problemRef = doc(db, "problems", currentProblemId);
        const userDoc = await transaction.get(userRef);
        const problemDoc = await transaction.get(problemRef);
        if (!problemDoc.exists() && !userDoc.exists()) {
          throw "Document does not exist!";
        } else {
          if (disliked) {
            transaction.update(userRef, {
              dislikedProblems: userDoc.data().dislikedProblems.filter((id) => id !==currentProblemId),
            });
            transaction.update(problemRef, {
              dislike: parseInt(problemDoc.data().dislike) - 1,
            });
            setAllProblemsData( { ...AllProblemsData, dislike: parseInt(AllProblemsData.dislike )- 1 });
            setUData((prev) => ({ ...prev, disliked: false }));
          } else if (liked) {
            transaction.update(userRef, {
              dislikedProblems: [...userDoc.data().dislikedProblems, currentProblemId],
              likedProblems: userDoc.data().likedProblems.filter((id) => id !== currentProblemId),
            });
            transaction.update(problemRef, {
              dislike: parseInt(problemDoc.data().dislike) + 1,
              like: parseInt(problemDoc.data().like) - 1,
            });
            setAllProblemsData({ ...AllProblemsData, dislike: parseInt(AllProblemsData.dislike) + 1, like: parseInt(AllProblemsData.like) - 1 }
            );
            setUData((prev) => ({ ...prev, disliked: true, liked: false }));
          } else {
            transaction.update(userRef, {
              dislikedProblems: [...userDoc.data().dislikedProblems,currentProblemId],
            });
            transaction.update(problemRef, {
              dislike: parseInt(problemDoc.data().dislike) + 1,
            });
            setAllProblemsData( { ...AllProblemsData, dislike: parseInt(AllProblemsData.dislike) + 1 } );
            setUData((prev) => ({ ...prev, disliked: true }));
          }
        }
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  };

  return (
    <div className="w-1/2 bg-[#262626] p-2 m-2 rounded-lg overflow-y-scroll ">
      <h1 className="text-2xl font-bold text-white m-2">{data[0].title}</h1>

      <div className=" flex item-center gap-4 ">
        <span
          className="px-2 bg-[#3a3a3a] rounded-xl"
          style={{ color: color, fontSize: "14px" }}
        >
          {data[0].difficulty}
        </span>
        <span onClick={LikeQuestion} className="text-gray-400">
          {Udata.liked? <i className="fa-solid fa-thumbs-up text-blue-800"></i>:<i className="fa-solid fa-thumbs-up text-gray-400"></i>}{" "}
          {AllProblemsData.like}
        </span>
        <span onClick={disLikeQuestion} className="text-gray-400">
         { Udata.disliked? <i className="fa-solid fa-thumbs-down text-blue-800"></i>:<i className="fa-solid fa-thumbs-down text-gray-400"></i>}{" "}
          {AllProblemsData.dislike}
        </span>
      </div>

      <p className=" p-2 text-sm text-gray-300">{data[0].description}</p>

      {/* ------------examples-------------------- */}
      {data[0].examples.map((ex, index) => (
        <Example index={index} {...ex} />
      ))}

      {/* ---------constraints----------------  */}
      <h2 className="font-bold text-white ">constraints :</h2>
      <div className="p-4">
        <ul className="list-disc text-white li">
          {data[0].constraints.map((constraint) => {
            return (
              <li className=" m-2  text-white text-sm bg-neutral-700 rounded-md px-2 w-fit list-item">
                {constraint.desc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProblemStatement;


