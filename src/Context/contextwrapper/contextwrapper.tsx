// Currently just stores the loginContext.  

import React, { useState } from "react";

// Contexts needed: 
// LoginID
// arrPosts?
// arrComments?
// arrPosts?

const loginContext = React.createContext({
    value: '',
    changer: (newVal: string)=>{}
})

export default loginContext;

// Create context wrapper

function reducer(contexState: any, action: any){
    switch (action.type) {
        case 'AUTHENTICATION_TOGGLE':
            return { ...contexState, isAuthenticated: !(contexState.isAuthenticated)};
        case 'AUTHORISATION_TOGGLE':
            return { ...contexState, isAuthorised: !(contexState.isAuthorised)};
        default: 
            return contexState;
    }
}

export function ContextProvider(props: any){
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
