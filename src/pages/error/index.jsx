import {Result,Button} from 'antd'
import {useNavigate} from "react-router-dom"
export const ErrorPage = () => {
    const nav = useNavigate()
  return (
    <div>
        <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={()=>nav("/")}>Back Home</Button>}
        />
    </div>
  )
}
