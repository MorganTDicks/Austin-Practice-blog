// Displays a summary of all the user's comments, and which posts they belong to

// TODO: Limit results and have a page browser. 

import { Comments, Post } from "@/Declarations/PostTypes";
import { User } from "@/Declarations/UserTypes";
import { getPost, getUser, previewContent } from "@/Utilities/datatools/dataitools";
import Link from "next/link";
import styles from '../../styles/components/useractivity.module.css';
import { useContext } from "react";
import commentsContext from "@/Context/datawrappers/commentswrapper";
import postContext from "@/Context/datawrappers/postwrapper";
import userContext from "@/Context/datawrappers/userwrapper";


export default function UserActivity(props: any){
    let currentUser: User = props.currentUser;
    let arrComments: Comments[] = useContext(commentsContext).value;
    let arrPosts: Post[] = useContext(postContext).value;
    let arrUsers: User[] = useContext(userContext).value;
    
    return(
        <div className={styles.divstuff}>
            <h1 className={styles.headerstuff}> your activity (comments) </h1>
            <div className={styles.bodystuff}> 
                {arrComments.map((commy: Comments) => {
                    if (commy.uid == currentUser.id){
                        return(
                            <ul className={styles.ulstuff}>
                                <li> {getUser(arrUsers, commy.uid).username} on <Link href={`/Posts/${commy.pid}`} className={styles.linkstuff}> {previewContent(getPost(arrPosts, commy.pid).header, 20)}</Link>: </li>
                                <li> {previewContent(commy.body, 30)} </li>
                            </ul>
                        )
                    };
                    return(<></>);
                })}
            </div>
        </div>
    )
}