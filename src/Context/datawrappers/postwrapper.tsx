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
    
    // Fetching the Posts from api/posts
    
    // Temporary data until states can be used
    const [data, setData] = useState<PostData[]>([{
        postID: '', 
        Header: '',
        Body: '', 
        Topic: '',
        PostDate: '', 
        Status: ''
    }]);

    // TODO: Convert to a custom hook for better single-use methodology
    // TODO: handle updates / changes to Posts. 
    
    useEffect(()=>{
        fetch("/api/posts").then(async res => await res.json()).then(json => setData(json)); // or .then(setData) assumes json is passed in automatically    
        console.log(data);
    }, [])
    
    // Convert Database format to local format:
    let preVal: Post[] = [DataImporter.initialPost];
    for (let dat of data){
        if (dat.Status === 'approved'){
            preVal = [...preVal, {id: dat.postID, topic: dat.Topic, postdate: dat.PostDate, suggester: dat.Suggester, header: dat.Header, body: dat.Body}]; 
        }
    }
    let convertedData: Post[] = preVal;
    console.log(convertedData);
    // return(convertedData);
    
    // let initialValue: Post[] = DataImporter.importPosts;
    let initialValue: Post[] = convertedData;
    

    const [contexState, setContexState] = useState<Post[]>(initialValue);

    console.log('Init: ', initialValue);

    function changer(newVal: Post){
        setContexState((preVal) => ([...preVal, newVal]));
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <postContext.Provider value={contexStuff}> 
            {props.children}
        </postContext.Provider>
    )
}
