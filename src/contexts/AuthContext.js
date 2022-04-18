import React,{createContext,useState,useEffect, useReducer} from 'react';
import  authReducer  from '../reducers/AuthReducer';
export const AuthContext=createContext();
const AuthContextProvider=({children})=>{
        //State
        console.log('auth')
        // const [isAuthenticated,setAuthentication]=useState(false);
        // const toggleAuth=()=>{
        //     setAuthentication(!isAuthenticated)
        // }

        const [isAuthenticated,dispatch]=useReducer(authReducer,false)
        // contextData
        const authContextData={
            isAuthenticated,
            dispatch
        }
        useEffect(()=>{
                    if(isAuthenticated){
                            alert('Bạn có muốn login')
                    }else{
                            alert('Bạn có muốn logout')
                    }
        },[isAuthenticated])
        return (
            <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
        )
}
export default AuthContextProvider;