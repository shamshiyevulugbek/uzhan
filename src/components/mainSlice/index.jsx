import {useState} from 'react'
import { Question } from "../question"
import {Pagination} from "antd"

export const MainSlice = ({questions}) => {
    const [index,setIndex] = useState(0)
    // console.log(questions,"questions")
  return (
    <div>
        <Question index={index} question={questions[index]}/>
        <Pagination onChange={(page)=>setIndex(page-1)} showSizeChanger={false} total={questions.length} defaultPageSize={1}/>
    </div>
  )
}
