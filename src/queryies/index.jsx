import {QueryClient} from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
            cacheTime:0,
            refetchOnReconnect:false,
            refetchInterval:null
        }
    }
})