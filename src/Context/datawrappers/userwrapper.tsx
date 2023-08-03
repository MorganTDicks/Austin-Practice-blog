// Stores the list of users. Note: Useeffect to push user updates to the database.  
// Scope:  (sets), global(uses)

import { User } from "@/Declarations/UserTypes";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import { useUserFetch } from "@/hooks/useuserfetch/useuserfetch";
import React, { useState } from "react";

const userContext = React.createContext({
    value: [DataInitialiser.initialUser],
    changer: (newVal: User)=>{},
    updater: (newVal: User)=>{}
})

export default userContext;

// User context wrapper

export function UserProvider(props: any){
   
    let contexStuff = useUserFetch();

    return(
        <userContext.Provider value={contexStuff}> 
            {props.children}
        </userContext.Provider>
    )
}
