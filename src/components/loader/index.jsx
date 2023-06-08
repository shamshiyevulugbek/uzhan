import {Spin} from 'antd'
import s from "./loader.module.scss"
export const Loader = () => {
  return (
    <div className={s.loader}>
        <Spin size={48}/>
    </div>
  )
}
