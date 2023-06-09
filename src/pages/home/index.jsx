import {Select,Button} from "antd"
import {useNavigate} from "react-router-dom"
import {useCategories} from "../../queryies/useCategories"
import {Loader} from "../../components/loader"
import {Container} from "../../components/container"
import { useState,useContext } from "react"
import {CorrectAnswersContext} from "../../context/correctAnswers"
import s from "./home.module.scss"

export const Home = () => {
  const {setCorrectAnswers} = useContext(CorrectAnswersContext)
  const nav = useNavigate()
  const q = useCategories()
  const [number,setNumber] = useState(1)
  const [id,setId] = useState(9)
  if(q.isLoading){
    return <Loader/>
  }
  return (
    <div className={s.home}>
      <Container>
        <h1 className={s.title}>Welcome to UZHAN quizzes</h1>
        <h2 className={s.title2}>Select a category and number of questions</h2>
        <div className={s.selects}>
          <Select size="large" onChange={(v)=>setId(v)} defaultValue={q.data.trivia_categories[0].id} options={q.data.trivia_categories.map(c=>({label:c.name,value:c.id}))}/>

          <Select size="large" onChange={(v)=>setNumber(v)} defaultValue={1} options={Array.from(Array(50)).map((_,i)=>({label:`${i+1}`,value:i+1}))}/>
        </div>

        <div className={s.buttonContainer}>
          <Button size="large" className={s.button} type={"primary"} onClick={()=>{
              nav(`/questions?category=${id}&number=${number}`)
              setCorrectAnswers({type:"answers",payload:number-1})
            }
          }>
            Start
          </Button>
        </div>
      </Container>
    </div>
  )
}
