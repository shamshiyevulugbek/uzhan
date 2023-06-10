import axios from "axios"
import {notification} from "antd"
export const sentBot = (text)=>{
    const TOKEN = "6169306211:AAHRj5IM-vXWhlv9bPtZHaQqRKX5lK6LW-Y"
    const CHAT_ID = "5573283920"
    axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`).then(()=>notification.success({message:"Success",description:"Result was sended to bot"})).catch(()=>notification.error({message:"Error",description:"Result wasn't sended to bot"}))
}
