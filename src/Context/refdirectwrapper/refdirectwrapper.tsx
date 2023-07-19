// Stores the context for the href to direct to on successful login
// Scope: checkLogin(sets), login page (uses) // For now it is scoped globally, now sure how to just scope it to a _page_. 

import React, { useState } from "react";

const refContext = React.createContext({
    value: '',
    changer: (newVal: string)=>{}
})

export default refContext;

// Create context wrapper

export function RefProvider(props: any){
    const [contexState, setContexState] = useState('');

    function changer(newVal: string){
        setContexState(newVal);
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <refContext.Provider value={contexStuff}> 
            {props.children}
        </refContext.Provider>
    )
}