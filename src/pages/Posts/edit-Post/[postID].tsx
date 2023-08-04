import { PostChanger } from "@/Components/Posts/postChanger";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";
import { getUserID } from "@/Utilities/auth/auth";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function EditPost(){
    const router = useRouter();
    let { postID } = router.query;
    // let actualPostID: string = postID? (Array.isArray(postID)? postID[0] : postID) : '';

    // If not logged in, redirect back to login page.
    const loggedinID = getUserID(useContext(loginContext).value);
    let refContex = useContext(refContext);
    useEffect(()=>{
        if (loggedinID.length < 1){
            refContex.changer(`/Posts/edit-Post/${postID}`);
            router.push('/User/login');
        }
    }, [])  

    return (
        <>
            <PostChanger postID={postID} addType="replace"/>
        </>
    )
}