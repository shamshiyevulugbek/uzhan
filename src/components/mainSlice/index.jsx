import {useState} from 'react'
import { Question } from "../question"
import {Pagination} from "antd"

export const MainSlice = ({questions}) => {
    const [index,setIndex] = useState(0)
  return (
    <div style={{marginBottom:30}}>
        <Question index={index} question={questions[index]}/>
        <div style={{textAlign:"center"}}>
          <Pagination onChange={(page)=>setIndex(page-1)} showSizeChanger={false} total={questions.length} defaultPageSize={1}/>
        </div>
    </div>
  )
}
