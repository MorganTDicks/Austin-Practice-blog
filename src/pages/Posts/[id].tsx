import { useRouter } from "next/router";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import PrevNext from "@/Components/Posts/prevnext";
import CommentInfo from "@/Components/Comments/CommentInfo";
import { Post } from "@/Declarations/PostTypes";
import { useContext } from "react";
import postContext from "@/Context/datawrappers/postwrapper";
import AddComment from "@/Components/Comments/addcomment";
import Link from "next/link";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import CheckLogin from "@/Components/account/checkLogin";
import { getUserID, getUserLevel } from "@/Utilities/auth/auth";

export default function Posting(){
    const router = useRouter();
    const { id } = router.query;
    const tokenContex = useContext(loginContext).value

    let allData = useContext(postContext).value;
    let myData: Post = DataInitialiser.initialPost;
    let prevPost: Post = DataInitialiser.initialPost;
    let nextPost: Post = DataInitialiser.initialPost;

    for (let i of allData){
        if (i.id == id){
           let dIndex = allData.indexOf(i);
            myData = i;
           // Previous post = i-1 header, next post = i+1 header. 
           if (dIndex >= 1)
                prevPost = allData[dIndex-1];
           
           if (dIndex < (allData.length-1))
                nextPost = allData[dIndex+1];
        break; 
        }
    }

    function postLevelString(){
        const userLevel = getUserLevel(tokenContex);
        switch (userLevel){
            case 0: 
                return('Suggest an edit');
            case 1: 
                return('Suggest an edit');
            case 2: 
                return('Edit this post');
            case 3: 
                return('Edit this post');
        }
        return('')
    }

    return(
        <div>
            <MainLayout pagename= {myData.header}> 
            <p> <Link href="/Posts" className="linkstuff"> {'<-'} back to browse posts </Link> </p>
            <h1> {myData.header} </h1>
            {myData.suggester && <p> Suggested by {myData.suggester.username} </p>}
            <br/>
            <p> {myData.body} </p>
            <p> <Link href="/Posts/edit-Post"> {postLevelString()} </Link> </p>
            <br/>
            <PrevNext prevPost = {prevPost} nextPost = {nextPost} />
            <br/>
            <br/>
            <br/>
            <CheckLogin label="Log in to post a comment" redirectTo={`/Posts/${myData.id}`} className="linkstuff">
                <AddComment postID={myData.id} loggedinID={getUserID(tokenContex)}/>
            </CheckLogin>
            <CommentInfo extrainfo={true} workingPost={myData}/>
            </MainLayout> 
        </div> 
    );
}