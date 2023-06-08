import Countdown from 'react-countdown';
import {useNavigate} from "react-router-dom"
export const Timer = ({minutes}) => {
    const nav = useNavigate()
    return (
        <Countdown date={Date.now() + minutes*60*1000} onComplete={()=>nav("/result")}/>
    )
}
