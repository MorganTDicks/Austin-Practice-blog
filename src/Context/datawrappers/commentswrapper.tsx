// Stores the list of commentss. Note: Useeffect to push comments updates to the database.  
// Scope:  (sets), global(uses)

import { Comments } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import { useCommentsFetch } from "@/hooks/usecommentsfetch/usecommentsfetch";
import React from "react";

const commentsContext = React.createContext({
    value: [DataImporter.initialComment],
    changer: (newVal: Comments)=>{}
})

export default commentsContext;

// Comments context wrapper

export function CommentsProvider(props: any){
    const contexStuff = useCommentsFetch();

    return(
        <commentsContext.Provider value={contexStuff}> 
            {props.children}
        </commentsContext.Provider>
    )
}
