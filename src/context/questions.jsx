import { createContext,useState } from "react";

export const QuestionsContext = createContext()


export const QuestionsContextProvider = ({children}) => {
    const [questions,setQuestions] = useState([])
  return (
    <QuestionsContext.Provider value={{questions,setQuestions}}>
        {children}
    </QuestionsContext.Provider>
  )
}
