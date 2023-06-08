import {useQuery} from "@tanstack/react-query"
import axios from "./axios"
import {notification} from "antd"
export const useCategories = ()=>{
    return useQuery(["categories"],()=>axios.get("api_category.php").then(res=>res.data),{
        onError:err=>notification.error({message:"Error",description:err.message})
    })
}