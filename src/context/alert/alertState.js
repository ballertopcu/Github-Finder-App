import React,{ useReducer } from "react"
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer"


const AlertState = (props) =>{
    const ininalState = null

    const [state,dispatch] = useReducer(AlertReducer,ininalState);

    const setAlert = (msg,type) =>{
        dispatch({type:"SET_ALERT",payload:{msg,type}})
        setTimeout(()=>{
            dispatch({type:"REMOVE_ALERT"})
        },3000)
    }

    return <AlertContext.Provider
            value={{
                alert : state,
                setAlert
            }}>
                {props.children}
        </AlertContext.Provider>
}

export default AlertState