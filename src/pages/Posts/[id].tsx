import { useRouter } from "next/router";
import Link from "next/link";

import Housing from "@/Components/housing/housing";
import DataImporter from "@/Components/dataimporter";
import PrevNext from "@/Components/Posts/prevnext";
import UserInfo from "@/Components/Posts/UserInfo";

export default function Posting(){
    const router = useRouter();
    const { id } = router.query;

    let allData = DataImporter.importPosts;
    let myData: Post = {id: '', topic: '', postdate: '', suggester: '',  header: '', body: ``, bannerpath: ''};
    let prevPost: Post = {id: '', topic: '', postdate: '', suggester: '',  header: '', body: ``, bannerpath: ''};
    let nextPost: Post = {id: '', topic: '', postdate: '', suggester: '',  header: '', body: ``, bannerpath: ''};

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
            <Housing pagename= {myData.header}> 
            <p> back to browse posts (allign Left) </p>
            <h1> {myData.header} </h1>
            <p> Suggester Info (On the left) </p>
            <p> {myData.body} </p>
            <p> prev / next post </p>
            <br/>
            <PrevNext prevPost = {prevPost} nextPost = {nextPost} />
            <br/>
            <br/>
            <br/>
            <p> Add a comment or Suggest a post! </p>
            <UserInfo extrainfo={true} workingPost={myData}/>
            </Housing> 
        </div> 
    );
}