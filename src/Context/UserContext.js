import { createContext ,useContext,useState} from "react";

export const LoginContext=createContext();



export const LeetcodeContext=(props)=>{
  const [isLogin,setLogin]=useState(false);

     const data={
          isLogin,
          setLogin
     }


     return <LoginContext.Provider value={data}>
        {props.children}
     </LoginContext.Provider>
}