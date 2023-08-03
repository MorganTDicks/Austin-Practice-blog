import { UserData } from "@/Declarations/DBTypes";
import { User } from "@/Declarations/UserTypes";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import { userdataToUser } from "@/Utilities/datatools/dataitools";
import { useEffect, useState } from "react";

export function useUserFetch(){
    const [contexState, setContexState] = useState([DataInitialiser.initialUser]);

    // Fetching the data from api
    useEffect(()=>{
        fetch("/api/users").then(async res => await res.json()).then(setData);  
    }, [])

    function setData(newData: UserData[]){
        setContexState(userdataToUser(newData))
    }

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

    return {
        value: contexState,
        changer: changer,
        updater: updater
    }
}