import React, { useState, useEffect } from 'react';
import app from "../Data/firebase"
import 'firebase/firestore';
import { auth } from '../Data/firebase';
import { getFirestore,doc,getDoc, getDocs,setDoc} from 'firebase/firestore';
import { getDatabase, ref, child, get,set ,query} from "firebase/database";

const Dummy = () => {
    const db =getFirestore(app);

    const [inputs,setinputs]=useState({
      id:"",
      like:0,
      dislike:0,
      title:"",
      difficulty:"",

    });

    const handleChange=(e)=>{
      setinputs((prev)=> {
        return {
          ...prev,
         [e.target.name]:e.target.value
        }
      })
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      await setDoc(doc(db, "problems",inputs.id ), inputs);
      alert("submited")
      
    }

    // function writeUserData() {
    //   console.log("data sending")
    //   const db = getDatabase();
    //   set(ref(db, 'problems/' + userId),inputs);
    //   console.log("seded")
    // }
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
        
    //         writeUserData(3,"sakshi","sakshithakare121@gmail.com","ncdmfn");
    //         const db = getDatabase()
    //         const dbref=ref(db, `questions`)
    //         get(dbref,"users").then((snapshot)=>{
    //           if (snapshot.exists){
    //             console.log(snapshot.val())
    //           }
    //         })
           
    //        ;
    //       } catch (error) {
    //         console.error('Error fetching activities:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
  return (
    <div>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <input type="text" name="id" placeholder="id"   onChange={handleChange}/>
    <input type="text" name="title" placeholder="title" onChange={handleChange}/>
    <input type="text" name="difficulty" placeholder="difficulty" onChange={handleChange}/>
    <input type="text" name="like" placeholder="like" onChange={handleChange}/>
    <input type="text" name="dislike" placeholder="dislike" onChange={handleChange}/>
    <button type='submit' className='text-white bg-slate-400'>save data</button>
    </form>

   

    </div>
  )
}

export default Dummy
