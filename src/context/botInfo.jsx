import { createContext,useState } from "react";

export const BotInfoContext = createContext()


export const BotInfoContextProvider = ({children}) => {
    const [info,setInfo] = useState({name:"",category:9,total:1})
  return (
    <BotInfoContext.Provider value={{info,setInfo}}>
        {children}
    </BotInfoContext.Provider>
  )
}