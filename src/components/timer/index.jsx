import Countdown from 'react-countdown';
import {useNavigate} from "react-router-dom"
import s from "./timer.module.scss"

export const Timer = ({minutes}) => {
    const nav = useNavigate()
    return (
        <div className={s.timer}>
            <Countdown date={Date.now() + minutes*60*1000} onComplete={()=>nav("/result")}/>
        </div>
        
    )
}
