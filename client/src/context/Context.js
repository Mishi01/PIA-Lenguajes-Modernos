import {createContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    usuario : JSON.parse(localStorage.getItem("usuario"))||null,
    isFetching: false,
    error:false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("usuario", JSON.stringify(state.usuario))
    },[state.usuario])


    return(
        <Context.Provider value={{usuario:state.usuario, isFetching:state.isFetching,error:state.error, dispatch,}}>
            {children}
        </Context.Provider>
    )
}