import React, {useState, useReducer, useContext} from 'react'
import reducer from './reducer'
import { DISPLAY_ALERT } from './action'

const initialState = {
    isLoading:  false,
    showAlert: true,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const displayAlert = () => {
        dispatch({type:DISPLAY_ALERT})
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<AppContext.Provider value={{...state, displayAlert}}>{children}</AppContext.Provider>)
}

const useAppContext = () => {
    return useContext(AppContext)    
}

export {AppProvider, initialState, useAppContext}