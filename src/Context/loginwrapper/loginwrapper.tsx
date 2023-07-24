// Currently just stores the loginContext.  
// Scope: login page (sets), global(uses)

import React, { useState } from "react";

// Other contexts needed: 
// arrPosts?
// arrComments?

const loginContext = React.createContext({
    value: '',
    changer: (newVal: string)=>{}
})

export default loginContext;

// Create context wrapper

export function LoginProvider(props: any){
    const [contexState, setContexState] = useState('');

    function changer(newVal: string){
        setContexState(newVal);
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <loginContext.Provider value={contexStuff}> 
            {props.children}
        </loginContext.Provider>
    )
}
