import DataImporter from "../dataimporter";
import styles from "@/styles/components/userinfo.module.css";

interface UserProps{
    postID: Post;
    extrainfo?: boolean;
};

export default function UserInfo({postID, extrainfo = false}: UserProps){
    // Importing the List of Posts from the object
    let post = postID;
    let arrComments: Array<Comments> = DataImporter.importComments;
    let arrUsers: Array<User> = DataImporter.importUsers;

    // Find Comments of the post, show most recent comment info
    // postComments: Array<Comment> = getPostComments(postID)
    let postComments:Array<Comments> = [];
    for (let c of arrComments){
        if (c.pid == post.id){
            postComments.push(c);        
        }
    }
    
    let noReplies = postComments.length;
    if (noReplies == 0){ // If no comments on post, then there can't be a most recent post now can there?
        return(
            <table className={styles.tableStuff}> <tr> <td> No replies yet </td> </tr> </table>
        )
    }  
    
    if (extrainfo === false){
        let recentComment  = findRecentComment(postComments);
        let recentUser:  User = getUser(arrUsers, recentComment);
        
        return(
            <table className={styles.tableStuff}>
                <tr className={styles.topStuff}> 
                    <td className={styles.leftStuff}> {noReplies} Replies </td>
                    <td className={styles.middleStuff}></td>
                    <td className={styles.rightStuff}> {recentUser.username} </td>
                </tr>
                <tr className={styles.bottomStuff}>
                    <td className={styles.leftStuff}> {recentComment.likes} Likes </td>
                    <td className={styles.middleStuff}></td>
                    <td className={styles.rightStuff}> {timeMessage(recentComment.activitydate)} </td>
                </tr>
            </table>
        )
    }
    // else
    
    return(
        postComments.map((p: Comments) => {
            let commentUser = getUser(arrUsers, p)
            
            return(
            <table className={styles.tableStuff}>
                <tr>
                    <td className={styles.leftStuff}> 
                        <ul> 
                            <li className={styles.topStuff}> {commentUser.username} </li>
                            <li className={styles.bottomStuff}> {timeMessage(p.activitydate)} </li>
                            <li className={styles.bottomStuff}> {p.likes} Likes </li>
                        </ul>
                    </td>
                    <td className={styles.middleStuff}></td>
                    <td className={styles.rightStuff}> {p.body} </td>
                </tr>
            </table>
            )
        })
    )
}

function timeSince(date: string){
    const dt = new Date();
    let y = date.slice(0,4) // -> Expected: 'yyyy'
    let currentyear = dt.getFullYear(); // -> Expected: yyyy

    let m = date.slice(5,7); // -> Expected: 'mm'
    let currentmonth= dt.getMonth()+1; // ->Expected: mm (NOTE: 0 is janury)

    let d = date.slice(8,10); // -> Expected: 'dd'
    let currentday = dt.getDate(); // -> Expected: dd

    let newy = currentyear - +y;
    let newm = currentmonth - +m;
    let newd = currentday - +d;

    let fin = newy*365 + newm*30 + newd;
    return(fin);
}

function timeMessage(inp: string){
    let fin= timeSince(inp);
    if (fin == 0) return('Just now');
    if (fin == 1) return(`1 day ago.`);
    return(`${fin} days ago.`);
}

function findRecentComment(postComments: Array<Comments>): Comments{
    let bigIndex = postComments.reduce((prev,curr) => {
        return (timeSince(prev.activitydate) < timeSince(curr.activitydate))? prev: curr;
    });

    return(bigIndex);
}

function getUser(arrUsers: User[], recentComment: Comments): User{
    for (let u of arrUsers){
        if (u.id == recentComment.uid){
           return(u);
        }
    }
    return {id: '', username: 'No replies yet', name: '', surname: '', email: ''};
}