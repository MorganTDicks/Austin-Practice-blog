// Stores the list of Posts. Note: Useeffect to push post updates to the database.  
// Scope:  (sets), global(uses)

import { PostData } from "@/Declarations/DBTypes";
import { Post } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import React, { useEffect, useState } from "react";


const postContext = React.createContext({
    value: [DataImporter.initialPost], // This value will only be used if no value is provided by the wrapper.
    changer: (newVal: Post)=>{}
})

export default postContext;

// Create context wrapper

export function PostProvider(props: any){
    // TODO: Convert to a custom hook for better single-use methodology 

    const [data, setData] = useState<PostData[]>([{
        postID: '', 
        Header: '',
        Body: '', 
        Topic: '',
        PostDate: '', 
        Status: ''
    }]);
    
    // Fetching the Posts from api/posts
    useEffect(()=>{
        fetch("/api/posts").then(async res => await res.json()).then(setData);  
    }, [])
    
    // Convert Database format to local format:
    let preVal: Post[] = [DataImporter.initialPost];
    preVal.splice(0,1); // Removing the blank initial post
    
    for (let dat of data){
        if (dat.Status === 'approved'){
            preVal = [...preVal, {id: dat.postID, topic: dat.Topic, postdate: dat.PostDate, suggester: dat.Suggester, header: dat.Header, body: dat.Body}]; 
        }
    }
    let convertedData: Post[] = preVal;
    
    
    function changer(newVal: Post){
        // setContexState((preVal) => ([...preVal, newVal]));
        // TODO: Setdata and update API.
    }

    const contexStuff = {
        value: convertedData,
        changer: changer
    }

    return(
        <postContext.Provider value={contexStuff}> 
            {props.children}
        </postContext.Provider>
    )
}
