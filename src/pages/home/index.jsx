import {Select,Button,Input,notification} from "antd"
import {useNavigate} from "react-router-dom"
import {useCategories} from "../../queryies/useCategories"
import {Loader} from "../../components/loader"
import {Container} from "../../components/container"
import { useContext } from "react"
import {BotInfoContext} from "../../context/botInfo"
import s from "./home.module.scss"

export const Home = () => {
  const {info,setInfo} = useContext(BotInfoContext)
  const nav = useNavigate()
  const q = useCategories()
  if(q.isLoading){
    return <Loader/>
  }
  return (
    <div className={s.home}>
      <Container>
        <h1 className={s.title}>Welcome to UZHAN quizzes</h1>
        <h2 className={s.title2}>Select a category and number of questions</h2>
        <div className={s.selects}>
          <Select size="large" onChange={(v)=>setInfo(p=>({...p,category:v}))} defaultValue={q.data.trivia_categories[0].id} options={q.data.trivia_categories.map(c=>({label:c.name,value:c.id}))}/>

          <Select size="large" onChange={(v)=>setInfo(p=>({...p,total:v}))} defaultValue={1} options={Array.from(Array(50)).map((_,i)=>({label:`${i+1}`,value:i+1}))}/>
        </div>
        <div style={{textAlign:"center"}}>
          <Input style={{width:300}} maxLength={40} size="large" placeholder="Input your name" onChange={(e)=>setInfo(p=>({...p,name:e.target.value}))}/>
        </div>

        <div className={s.buttonContainer}>
          <Button size="large" className={s.button} type={"primary"} onClick={()=>{
              if(!info.name) notification.warning({message:"Warning",description:"Input your name"})
              else nav(`/questions?category=${info.category}&number=${info.total}`) 
            }
          }>
            Start
          </Button>
        </div>
      </Container>
    </div>
  )
}
