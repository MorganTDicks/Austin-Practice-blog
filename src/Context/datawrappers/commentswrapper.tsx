// Stores the list of commentss. Note: Useeffect to push comments updates to the database.  
// Scope:  (sets), global(uses)

import { Comments } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import React, { useState } from "react";


let initialValue = DataImporter.importComments;

const commentsContext = React.createContext({
    value: initialValue,
    changer: (newVal: Comments)=>{}
})

export default commentsContext;

// Create context wrapper

export function commentsProvider(props: any){
    const [contexState, setContexState] = useState(initialValue);

    function changer(newVal: Comments){
        setContexState((preVal) => ({...preVal, newVal}));
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <commentsContext.Provider value={contexStuff}> 
            {props.children}
        </commentsContext.Provider>
    )
}
