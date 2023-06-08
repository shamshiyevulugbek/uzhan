import s from './question.module.scss'
import {AnswersContext} from "../../context/answers"
import {CorrectAnswersContext} from "../../context/correctAnswers"
import { useContext } from 'react'
import {Radio} from "antd"
import {Option} from "../option"

export const Question = ({index,question,isResult=false}) => {
    const {answers,setAnswers} = useContext(AnswersContext)
    const {correctAnswers} = useContext(CorrectAnswersContext)
    // console.log("Question render")
    const makeOptions = (incArr,correctA,i)=>{
      incArr.splice(i,0,correctA)
      return incArr
    }
  return (
    <div className={s.question}>
        <p>Question {index+1}: {atob(question.question)}</p>
        <div>
          {
            makeOptions([...question.incorrect_answers],question.correct_answer,correctAnswers[index]).map((v,c)=><Option key={c} isResult={isResult} selected={answers[index]} correct={correctAnswers[index]} text={v} type={c}/>)
          }
        </div>
        {
          !isResult?
          <div>
            <Radio.Group value={answers[index]} name={`answer${index}`} buttonStyle='solid' optionType='button' onChange={(v)=>setAnswers({type:index,payload:v.target.value})}>
              <Radio value={0}>A</Radio>
              <Radio value={1}>B</Radio>
              <Radio value={2}>C</Radio>
              <Radio value={3}>D</Radio>
            </Radio.Group>
          </div>:null
        }
    </div>
  )
}
