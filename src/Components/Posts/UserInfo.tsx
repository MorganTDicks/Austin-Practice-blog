import DataImporter from "../dataimporter";
import styles from "@/styles/components/userinfo.module.css";
import type { Post } from "@/Declarations/PostTypes";
import type { Comments } from "@/Declarations/PostTypes";
import type { User } from "@/Declarations/UserTypes";


interface UserProps{
    workingPost: Post;
    extrainfo?: boolean;
};

export default function UserInfo({workingPost: post, extrainfo = false}: UserProps){
    let arrComments: Array<Comments> = DataImporter.importComments;
    let arrUsers: Array<User> = DataImporter.importUsers;

    let postComments:Array<Comments> = [];
    for (let c of arrComments){
        if (c.pid == post.id){
            postComments.push(c);        
        }
    }
    
    let noReplies = postComments.length;
    if (noReplies == 0){ // If no comments on post, then there can't be a most recent post.
        return(
            <table className={styles.tableStuff}> <tr> <td> No replies yet </td> </tr> </table>
        )
    }  
    
    if (extrainfo === false){
        let recentComment  = findRecentComment(postComments);
        let recentUser:  User = getUser(arrUsers, recentComment.uid);
        
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
            let commentUser = getUser(arrUsers, p.uid)
            
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

export function timeSince(date: string): number{
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

export function getUser(arrUsers: User[], inpIdentifier: string): User{
    // Option 1: Check type of inpObject and action accordingly
    // Option 2: have two optional paramiters, one for Comments and one for Post
    // Option 3: have two separate functions, one for Comments one for Post
    // Option 4: Take just the identifier instead of the whole object. I chose this one. 
    
    for (let u of arrUsers){
        if (u.id == inpIdentifier){
        return(u);
        }
    }
    return({...(DataImporter.initialUser), username: 'No replies yet'});

}