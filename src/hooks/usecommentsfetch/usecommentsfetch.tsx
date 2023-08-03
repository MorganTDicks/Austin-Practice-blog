import { CommentsData } from "@/Declarations/DBTypes";
import { Comments } from "@/Declarations/PostTypes";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import { commentsdataToComments } from "@/Utilities/datatools/dataitools";
import { useEffect, useState } from "react";

export function useCommentsFetch(){
    const [contexState, setContexState] = useState([DataInitialiser.initialComment]);

    // Fetching the Posts from api/posts
    useEffect(()=>{
        fetch("/api/comments").then(async res => await res.json()).then(setData);  
    }, [])

    function setData(newData: CommentsData[]){
        setContexState(commentsdataToComments(newData));
    }

    function changer(newVal: Comments){
        setContexState((preVal) => ([...preVal, newVal]));
    }

    return {
        value: contexState,
        changer: changer
    }
}