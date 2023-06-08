import {Question} from "../../components/question"
import {Container} from "../../components/container"
import {useContext,useEffect} from "react"
import {QuestionsContext} from "../../context/questions"
import {CorrectAnswersContext} from "../../context/correctAnswers"
import {AnswersContext} from "../../context/answers"
import {useNavigate} from "react-router-dom"
import { Button } from "antd"

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
      <div>
        <Container>
          <h2>Results</h2>
          <div>
            {
              questions.map((v,i)=>{
                if(v) return <Question key={i} index={i} question={questions[i]} isResult={true}/>
                else return null
              })
            }
          </div>
          <div>
            Total: {total.length}, resolved: {resolved.length}
          </div>
          <div>
            <Button type="primary" onClick={()=>{
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