import {useSearchParams,Navigate,useNavigate} from "react-router-dom"
import {useQuestions} from "../../queryies/useQuestions"
import {useEffect,useContext} from "react"
import {CorrectAnswersContext} from "../../context/correctAnswers"
import {BotInfoContext} from "../../context/botInfo"
import {Loader} from "../../components/loader"
import {MainSlice} from "../../components/mainSlice"
import {Timer} from "../../components/timer"
import {Container} from "../../components/container"
import {Button} from "antd"
import s from "./questions.module.scss" 

export const Questions = () => {
  const [search] = useSearchParams()
  const {setCorrectAnswers} = useContext(CorrectAnswersContext)
  const {info} = useContext(BotInfoContext)
  const nav = useNavigate()
  const amount = search.get("number")
  const category = search.get("category")
  const q = useQuestions({amount,category,type:"multiple",encode:"base64"})
  useEffect(()=>{
    if(amount){
      setCorrectAnswers({type:"answers",payload:amount-1})
    }
  },[setCorrectAnswers,amount])
  if(!amount || !category || !info.name){
    return <Navigate to={"/"}/>
  }
  if(q.isLoading){
    return <Loader/>
  }

    return (
      <div className={s.questions}>
        <Container>
          <h2 className={s.title}>Questions</h2>
          <MainSlice questions={q.data.results}/>
          <Timer minutes={amount}/>
          <div className={s.buttonContainer}>
            <Button className={s.button} size="large" type={"primary"} onClick={()=>nav("/result")}>
              Finish
            </Button>
          </div>
        </Container>
      </div>
    )
  }