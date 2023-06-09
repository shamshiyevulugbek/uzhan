import {Question} from "../../components/question"
import {Container} from "../../components/container"
import {useContext,useEffect} from "react"
import {QuestionsContext} from "../../context/questions"
import {CorrectAnswersContext} from "../../context/correctAnswers"
import {AnswersContext} from "../../context/answers"
import {useNavigate} from "react-router-dom"
import { Button } from "antd"
import s from "./result.module.scss"

export const Result = () => {
  const nav = useNavigate()
  const {questions} = useContext(QuestionsContext)
  const {answers,setAnswers} = useContext(AnswersContext)
  const {correctAnswers,setCorrectAnswers} = useContext(CorrectAnswersContext)
  const resolved = answers.filter((v,i)=>(v === correctAnswers[i] && v !== undefined))
  const total = correctAnswers.filter((v)=>v !== undefined)
  useEffect(()=>{
    return ()=>{
      nav("/")
      setAnswers({type:"clear"})
      setCorrectAnswers({type:"clear"})
    }
  },[setCorrectAnswers,setAnswers,nav])
    return (
      <div className={s.result}>
        <Container>
          <h2 className={s.title}>Results</h2>
          <div>
            {
              questions.map((v,i)=>{
                if(v) return <Question key={i} index={i} question={questions[i]} isResult={true}/>
                else return null
              })
            }
          </div>
          <div className={s.total}>
            Total: <span style={{color:"gold"}}>{total.length}</span>, Correct answers: <span style={{color:"green"}}>{resolved.length}</span> <br/> Result: <span style={{color:"red"}}>{(resolved.length*100/total.length).toFixed(2)} %</span>
          </div>
          <div className={s.buttonContainer}>
            <Button size="large" className={s.button} type="primary" onClick={()=>{
              nav("/")
              setAnswers({type:"clear"})
              setCorrectAnswers({type:"clear"})
            }}>
              Home
            </Button>
          </div>
        </Container>
      </div>
    )
}