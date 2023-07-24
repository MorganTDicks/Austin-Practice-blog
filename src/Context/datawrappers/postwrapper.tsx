// Stores the list of Posts. Note: Useeffect to push post updates to the database.  
// Scope:  (sets), global(uses)

import { Post } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import React, { useState } from "react";


let initialValue = DataImporter.importPosts;

const postContext = React.createContext({
    value: initialValue,
    changer: (newVal: Post)=>{}
})

export default postContext;

// Create context wrapper

export function PostProvider(props: any){
    const [contexState, setContexState] = useState(initialValue);

    function changer(newVal: Post){
        setContexState((preVal) => ({...preVal, newVal}));
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
