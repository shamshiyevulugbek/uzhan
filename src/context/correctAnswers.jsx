import { createContext,useReducer } from "react";

export const CorrectAnswersContext = createContext()

const reducer = (state,action)=>{
    if(action.type === "answers"){
       return  state.map((v,i)=>{
        if(action.payload >= i)return Math.floor(Math.random()*4)
        else return v
      })
    }
    else if(action.type === "clear"){
      return state.map(_=>undefined)
    }
    else return state
}

const initailState = Array.from(Array(50))

export const CorrectAnswersContextProvider = ({children}) => {
    const [correctAnswers,setCorrectAnswers] = useReducer(reducer,initailState)
  return (
    <CorrectAnswersContext.Provider value={{correctAnswers,setCorrectAnswers}}>
        {children}
    </CorrectAnswersContext.Provider>
  )
}
