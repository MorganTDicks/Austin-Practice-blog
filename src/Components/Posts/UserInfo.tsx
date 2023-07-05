import DataImporter from "../dataimporter";
import styles from "@/styles/components/userinfo.module.css";

export default function UserInfo(props: any){
    // Importing the List of Posts from the object
    let post = props.postID;
    let arrComments: Array<Comments> = DataImporter.importComments;
    let arrUsers: Array<User> = DataImporter.importUsers;
    let postID = post.id;

    // Find Comments of the post, show most recent comment info
    // postComments: Array<Comment> = getPostComments(postID)
    let postComments:Array<Comments> = [];
    for (let c of arrComments){
        if (c.pid == post.id){
            postComments.push(c);        
        }
    }
    
    // noReplies = CountReplies(postID);
    let noReplies = postComments.length;
    
    let recentUser:  User = {id: '', username: 'No replies yet', name: '', surname: '', email: ''};
    if (noReplies == 0){ // If no comments on post, then there can't be a most recent post now can there?
    return(
        <table className={styles.tableStuff}> <tr> <td> No replies yet </td> </tr> </table>
    )
    }   

    // recentComment: Object = FindMostRecent(postID);
    let recentComment  = findRecentComment(postComments);
    
    // recentUser = UserName(RecentCommentuID);
    for (let u of arrUsers){
        if (u.id == recentComment.uid){
            recentUser = u;
            break;
        }
    }

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