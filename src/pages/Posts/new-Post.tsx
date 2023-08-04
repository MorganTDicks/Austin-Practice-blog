import { PostChanger } from "@/Components/Posts/postChanger";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";
import { getUserID } from "@/Utilities/auth/auth";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function NewPost(){
    
    // If not logged in, redirect back to login page.
    const loggedinID = getUserID(useContext(loginContext).value);
    const rout = useRouter();
    let refContex = useContext(refContext);
    useEffect(()=>{
        if (loggedinID.length < 1){
            refContex.changer('/Posts/new-Post');
            rout.push('/User/login');
        }
    }, [])  

    return (
        <>
            <PostChanger addType='add'/>
        </>
    )
}
