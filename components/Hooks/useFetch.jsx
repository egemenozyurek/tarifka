import { useState,useEffect } from "react";
import axios from "axios";
function useFetch(url){

    const [userdata,setUserData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        FetchData()       
        },[])
    
        async function FetchData(){
            try
            {
                const response= await axios.get(url)
                setUserData(response.data)
                setLoading(false)  
            }
            catch(error)
            {
                setError(true)
                setLoading(false) 
            }
        }

        return{loading,error,userdata}
}

export default useFetch