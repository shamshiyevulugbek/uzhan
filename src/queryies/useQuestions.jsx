import {useQuery} from "@tanstack/react-query"
import axios from "./axios"
import { notification } from "antd"
import {useNavigate} from "react-router-dom"
import {QuestionsContext} from "../context/questions"
import {useContext} from "react"

export const useQuestions = (params)=>{
    const nav = useNavigate()
    const {setQuestions} = useContext(QuestionsContext)
    return useQuery(["questions",params],()=>axios.get("api.php",{params:params}).then(res=>res.data),{
        onSuccess:data=>{
            if(data.response_code === 1){
                notification.error({message:"Error",description:"No Results"})
                nav("/")
            }
            if(data.response_code === 2){
                notification.error({message:"Error",description:"Invalid Paremetr"})
                nav("/")
            }
            else {
                setQuestions(data.results)
            }
        },
        onError:err=>notification.error({message:"Error",description:err.message})
    })
}