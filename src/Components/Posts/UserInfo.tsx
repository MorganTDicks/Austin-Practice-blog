import styles from "@/styles/components/userinfo.module.css";
import type { Post } from "@/Declarations/PostTypes";
import type { Comments } from "@/Declarations/PostTypes";
import type { User } from "@/Declarations/UserTypes";
import { getUser, findRecentComment, timeMessage } from "@/Utilities/datatools/dataitools";
import { useContext } from "react";
import commentsContext from "@/Context/datawrappers/commentswrapper";
import userContext from "@/Context/datawrappers/userwrapper";

interface UserProps{
    workingPost: Post;
    extrainfo?: boolean;
};

export default function UserInfo({workingPost: post, extrainfo = false}: UserProps){
    let arrComments: Array<Comments> = useContext(commentsContext).value;
    let arrUsers: User[] = useContext(userContext).value;

    let postComments:Array<Comments> = [];
    for (let c of arrComments){
        if (c.pid == post.id){
            postComments.push(c);        
        }
    }
    
    let noReplies = postComments.length;
    if (noReplies == 0){ // If no comments on post, then there can't be a most recent post.
        return(
            <p> No replies yet </p>
        )
    }  
    
    if (extrainfo === false){
        let recentComment  = findRecentComment(postComments);
        let recentUser:  User = getUser(arrUsers, recentComment.uid);
        
        return(
            <table className={styles.tableStuff}>
                <tbody> 
                    <tr className={styles.topStuff}> 
                        <td className={styles.leftStuff}> {noReplies} Replies </td>
                        {/* <td className={styles.middleStuff}></td> */}
                        <td className={styles.rightStuff}> {recentUser.username} </td>
                    </tr>
                    <tr className={styles.bottomStuff}>
                        <td className={styles.leftStuff}> {recentComment.likes} Likes </td>
                        {/* <td className={styles.middleStuff}></td> */}
                        <td className={styles.rightStuff}> {timeMessage(recentComment.activitydate)} </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    // else
    
    return(
        postComments.map((p: Comments) => {
            let commentUser = getUser(arrUsers, p.uid);
            
            return(
            <table className={styles.tableStuff}>
                <tbody>
                    <tr>
                        <td className={styles.leftStuff}> 
                            <ul> 
                                <li className={styles.topStuff}> {commentUser.username} </li>
                                <li className={styles.bottomStuff}> {timeMessage(p.activitydate)} </li>
                                <li className={styles.bottomStuff}> {p.likes} Likes </li>
                            </ul>
                        </td>
                        {/* <td className={styles.middleStuff}></td> */}
                        <td className={styles.rightStuff}> {p.body} </td>
                    </tr>
                </tbody>
            </table>
            )
        })
    )
}

