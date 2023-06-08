import { createContext,useReducer } from "react";

export const AnswersContext = createContext()

const reducer = (state,action)=>{
    if(action.type >= 0 && action.type < 50){
       return  state.map((v,i)=>{
        if(i === action.type){
            return action.payload
        }
        else return v
       })
    }
    else if(action.type === "clear"){
      return state.map(_=>undefined)
    }
    else return state
}

const initailState = Array.from(Array(50))

export const AnswersContextProvider = ({children}) => {
    const [answers,setAnswers] = useReducer(reducer,initailState)
  return (
    <AnswersContext.Provider value={{answers,setAnswers}}>
        {children}
    </AnswersContext.Provider>
  )
}
