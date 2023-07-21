import DataImporter from "../dataimporter";
import type { User } from "@/Declarations/UserTypes";
import type { Comments, Post } from "@/Declarations/PostTypes";

export function previewContent(msg: string, numchar: number): string {
    return(`${msg.substring(0,numchar-3)}...`);
}

export function getUser(inpIdentifier: string): User{
    // Option 1: Check type of inpObject and action accordingly
    // Option 2: have two optional paramiters, one for Comments and one for Post
    // Option 3: have two separate functions, one for Comments one for Post
    // Option 4: Take just the identifier instead of the whole object. I chose this one. 
    
    let arrUsers: User[] = DataImporter.importUsers;

    for (let u of arrUsers){
        if (u.id == inpIdentifier){
        return(u);
        }
    }
    return({...(DataImporter.initialUser), username: 'No replies yet'});
}

export function getPost(postID: string): Post{
    let arrPosts: Post[] = DataImporter.importPosts;

    for (let p of arrPosts){
        if (p.id == postID){
        return(p);
        }
    }
    
    return(
        {...(DataImporter.initialPost)}
    )

}

export function timeSince(date: string): number{
    const dt = new Date();
    let y = date.slice(0,4); // -> Expected: 'yyyy'
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

export function timeMessage(inp: string){
    let fin= timeSince(inp);
    if (fin == 0) return('Just now');
    if (fin == 1) return(`1 day ago`);
    return(`${fin} days ago`);
}

// TODO: Change to finding recent post, or change to sorting in order of most recent, and just take the first. 
export function findRecentComment(postComments: Array<Comments>): Comments{
    let bigIndex = postComments.reduce((prev,curr) => {
        return (timeSince(prev.activitydate) < timeSince(curr.activitydate))? prev: curr;
    });

    return(bigIndex);
}