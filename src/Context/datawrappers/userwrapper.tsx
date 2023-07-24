// Stores the list of users. Note: Useeffect to push user updates to the database.  
// Scope:  (sets), global(uses)

import { User } from "@/Declarations/UserTypes";
import DataImporter from "@/Utilities/dataimporter";
import React, { useState } from "react";


let initialUser = DataImporter.importUsers;

const userContext = React.createContext({
    value: initialUser,
    changer: (newVal: User)=>{},
    updater: (newVal: User)=>{}
})

export default userContext;

// Create context wrapper

export function UserProvider(props: any){
    const [contexState, setContexState] = useState(initialUser);

    function changer(newVal: User){
        setContexState((preVal) => ([...preVal, newVal]));
    }

    function updater(newVal: User){
        setContexState((preVal: User[]) => {
            // Deleting the old object
            for (let u of preVal){
                if (u.id == newVal.id){
                    preVal.splice(preVal.indexOf(u), 1);
                }
            }
            // Adding the new object
            return([...preVal, newVal]);
        });
    }

    const contexStuff = {
        value: contexState,
        changer: changer,
        updater: updater
    }

    return(
        <userContext.Provider value={contexStuff}> 
            {props.children}
        </userContext.Provider>
    )
}
