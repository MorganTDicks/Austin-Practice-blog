// Stores the list of users. Note: Useeffect to push user updates to the database.  
// Scope:  (sets), global(uses)

import { User } from "@/Declarations/UserTypes";
import DataImporter from "@/Utilities/dataimporter";
import React, { useState } from "react";


let initialUser = DataImporter.importUsers;

const userContext = React.createContext({
    value: initialUser,
    changer: (newVal: User)=>{}
})

export default userContext;

// Create context wrapper

export function UserProvider(props: any){
    const [contexState, setContexState] = useState(initialUser);

    function changer(newVal: User){
        setContexState((preVal) => ({...preVal, newVal}));
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <userContext.Provider value={contexStuff}> 
            {props.children}
        </userContext.Provider>
    )
}
