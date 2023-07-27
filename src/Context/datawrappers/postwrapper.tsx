// Stores the list of Posts.  
// Scope:  (sets), global(uses)

import { Post } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import usePostFetch from "@/hooks/usepostfetch/usepostfetch";
import React, { useEffect, useState } from "react";


const postContext = React.createContext({
    value: [DataImporter.initialPost], // This value will only be used if no value is provided by the wrapper.
    changer: (newVal: Post)=>{}
})

export default postContext;


// Post context wrapper

export function PostProvider(props: any){

    const contexStuff = usePostFetch();

    return(
        <postContext.Provider value={contexStuff}> 
            {props.children}
        </postContext.Provider>
    )
}
