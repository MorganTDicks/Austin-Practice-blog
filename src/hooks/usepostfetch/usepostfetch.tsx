import { PostData } from "@/Declarations/DBTypes";
import { Post } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import { useEffect, useState } from "react";

export default function usePostFetch(){
    const [convertedData, setConvertedData] = useState<Post[]>([DataImporter.initialPost])

    // Fetching the Posts from api/posts
    useEffect(()=>{
        fetch("/api/posts").then(async res => await res.json()).then(setData);  
    }, [])
    
    // Convert Database format to local format:
    function setData(data: PostData[]){
        let preVal: Post[] = convertedData;
        preVal.splice(0,1); // Removing the blank initial post
    
        for (let dat of data){
            if (dat.Status === 'approved'){
                preVal = [...preVal, {id: dat.postID, topic: dat.Topic, postdate: dat.PostDate, suggester: dat.Suggester, header: dat.Header, body: dat.Body}]; 
            }
        }
        setConvertedData(preVal); // overwrite the current data with what was pulled from the db
    }
    
    
    function changer(newVal: Post){
        // Additional argument: addtype? If that is the case, try using useReducer instead? 
            // addType would be replace, add or remove.
        
        // for now just adds to the pool. 
        setConvertedData((preVal) => ([...preVal, newVal]));
        
        // TODO: convert to server-side type & update API.
        // This will come in handy for converting the data:
            // [{
            //     postID: '', 
            //     Header: '',
            //     Body: '', 
            //     Topic: '',
            //     PostDate: '', 
            //     Status: ''
            // }]
    }

    return({
        value: convertedData,
        changer: changer
    })
}