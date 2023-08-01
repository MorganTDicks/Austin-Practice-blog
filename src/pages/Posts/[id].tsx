import { useRouter } from "next/router";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import DataImporter from "@/Utilities/dataimporter";
import PrevNext from "@/Components/Posts/prevnext";
import CommentInfo from "@/Components/Comments/CommentInfo";
import { Post } from "@/Declarations/PostTypes";
import { useContext } from "react";
import postContext from "@/Context/datawrappers/postwrapper";
import AddComment from "@/Components/Comments/addcomment";
import Link from "next/link";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import CheckLogin from "@/Components/account/checkLogin";

export default function Posting(){
    const router = useRouter();
    const { id } = router.query;
    const loggedinID = useContext(loginContext).value;

    let allData = useContext(postContext).value;
    let myData: Post = DataImporter.initialPost;
    let prevPost: Post = DataImporter.initialPost;
    let nextPost: Post = DataImporter.initialPost;

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

    return(
        <div>
            <MainLayout pagename= {myData.header}> 
            <p> <Link href="/Posts" className="linkstuff"> {'<-'} back to browse posts </Link> </p>
            <h1> {myData.header} </h1>
            {myData.suggester && <p> Suggested by {myData.suggester.username} </p>}
            <br/>
            <p> {myData.body} </p>
            <br/>
            <PrevNext prevPost = {prevPost} nextPost = {nextPost} />
            <br/>
            <br/>
            <br/>
            <CheckLogin label="Log in to post a comment" redirectTo={`/Posts/${myData.id}`} className="linkstuff">
                <p> Suggest an edit </p>
                <AddComment postID={myData.id} loggedinID={loggedinID}/>
                
            </CheckLogin>
            <CommentInfo extrainfo={true} workingPost={myData}/>
            </MainLayout> 
        </div> 
    );
}