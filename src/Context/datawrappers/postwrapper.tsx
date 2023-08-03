// Stores the list of Posts.  
// Scope:  (sets), global(uses)

import { Post } from "@/Declarations/PostTypes";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import usePostFetch from "@/hooks/usepostfetch/usepostfetch";
import React, { useEffect, useState } from "react";


const postContext = React.createContext({
    value: [DataInitialiser.initialPost], // This value will only be used if no value is provided by the wrapper.
    changer: (newVal: Post, type?: string)=>{}
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
