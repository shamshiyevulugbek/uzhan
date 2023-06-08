import {useSearchParams,Navigate,useNavigate} from "react-router-dom"
import {useQuestions} from "../../queryies/useQuestions"
import {Loader} from "../../components/loader"
import {MainSlice} from "../../components/mainSlice"
import {Timer} from "../../components/timer"
import {Container} from "../../components/container"
import {Button} from "antd"

export const Questions = () => {
  const [search] = useSearchParams()
  const nav = useNavigate()
  const amount = search.get("number")
  const category = search.get("category")
  const q = useQuestions({amount,category,type:"multiple",encode:"base64"})
  if(!amount || !category){
    return <Navigate to={"/"}/>
  }
  if(q.isLoading){
    return <Loader/>
  }
    return (
      <div>
        <Container>
          <MainSlice questions={q.data.results}/>
          <Timer minutes={amount}/>
          <div>
            <Button type={"primary"} onClick={()=>nav("/result")}>
              Finish
            </Button>
          </div>
        </Container>
      </div>
    )
  }