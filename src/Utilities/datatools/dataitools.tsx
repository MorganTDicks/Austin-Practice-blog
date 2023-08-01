import DataImporter from "../dataimporter";
import type { User } from "@/Declarations/UserTypes";
import type { Comments, Post } from "@/Declarations/PostTypes";
import { PostData, UserData } from "@/Declarations/DBTypes";


// ================== Getting stuff ============================

export function getUser(arrUsers: User[], inpIdentifier: string): User{
    // Option 1: Check type of inpObject and action accordingly
    // Option 2: have two optional paramiters, one for Comments and one for Post
    // Option 3: have two separate functions, one for Comments one for Post
    // Option 4: Take just the identifier instead of the whole object. I chose this one. 
    
    // TODO: Update to use context instead
    // let arrUsers: User[] = DataImporter.importUsers;

    for (let u of arrUsers){
        if (u.id == inpIdentifier){
        return(u);
        }
    }
    return({...(DataImporter.initialUser), username: 'No replies yet'});
}

export function getPost(arrPosts: Post[], postID: string): Post{
    for (let p of arrPosts){
        if (p.id == postID){
        return(p);
        }
    }
    
    return(
        {...(DataImporter.initialPost)}
    )

}

export function findRecentComment(postComments: Array<Comments>): Comments{
    let bigIndex = postComments.reduce((prev,curr) => {
        return (timeSince(prev.activitydate) < timeSince(curr.activitydate))? prev: curr;
    });

    return(bigIndex);
}

export function getThemes(allPosts: Post[]){
    let allThemes: Array<string> = ['Select Theme'];
    
    for (let p of allPosts){
        let theme = p.topic;
        if (allThemes.indexOf(theme) == -1)
        allThemes.push(theme);
    }

    return(allThemes)
}

export function getCurrentDate(){
    const dt = new Date();
    return {
        currentyear: dt.getFullYear(), // -> Expected: yyyy
        currentmonth: dt.getMonth()+1, // ->Expected: mm (NOTE: 0 is janury)
        currentday: dt.getDate() // -> Expected: dd
    }
}


//  ======================== String Stuff =================================

export function previewContent(msg: string, numchar: number): string {
    return(`${msg.substring(0,numchar-3)}...`);
}

export function timeSince(date: string): number{
    let {currentyear, currentmonth, currentday} = getCurrentDate();
    
    let y = date.slice(0,4); // -> Expected: 'yyyy'
    let m = date.slice(5,7); // -> Expected: 'mm'
    let d = date.slice(8,10); // -> Expected: 'dd'
    
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

export function containsSpecialChars(str: string): boolean { 
    // Credit: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,Copied!
    // const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const specialChars = /[`!@#$%^&*_+\-=\[\]{}\\|<>\/~]/; // Adjusted special characters for post headers
    return specialChars.test(str);
}

export function isUniquePost(arrInput: Post[], title: string): boolean{
    // ID is calculated from header, hence why header is checked and not id. 
    for (let p of arrInput){
        if (p.header == title){
            return (false);
        }
    }
    return (true);
}


// ========================== Converting Stuff ================================

export function postdataToPost(arrUsers: User[], data: PostData[], status: string): Post[]{
    // Convert Database format to local format:
    
    let tempVal: Post[] = [DataImporter.initialPost];
    tempVal.splice(0,1); // Removing the blank initial post
    
    for (let dat of data){
        if (dat.Status === status){
            tempVal = [...tempVal, {
                    id: dat.postID, 
                    topic: dat.Topic, 
                    postdate: dat.PostDate, 
                    suggester: (dat.Suggester? getUser(arrUsers, dat.Suggester): undefined), 
                    header: dat.Header, 
                    body: dat.Body
                }]; 
        }
    }
    return tempVal;
}

export function postToPostData(data: Post[]): PostData[]{
    // Convert local to database format:

    let tempVal: PostData[] = [{ 
                    postID: '', 
                    Header: '',
                    Body: '', 
                    Topic: '',
                    PostDate: '', 
                    Status: ''
                }];
    tempVal.splice(0,1); // Removing the blank initial post
    
    for (let dat of data){
        tempVal = [...tempVal, {
            postID: dat.id, 
            Header: dat.header,
            Body: dat.body, 
            Topic: dat.topic,
            Suggester: (dat.suggester? dat.suggester.id: undefined),
            PostDate: dat.postdate, 
            Status: (dat.suggester? 'pending' : 'draft')
        }]; 
    }
    return tempVal;
}

export function userdataToUser(data: UserData[]): User[]{
    // Convert Database format to local format:
    
    let tempVal: User[] = [DataImporter.initialUser];
    tempVal.splice(0,1); // Removing the blank initial post
    
    for (let dat of data){
            tempVal = [...tempVal, {
                id: dat.userID, // ID format: II000000, II being either initials or two random letters if firstname not provided
                username: dat.Username,
                name: dat.Name, 
                surname: dat.Surname, 
                email: dat.Email
                // Password not stored in frontend. 
            }]; 
    }
    return tempVal;
}

export function userToUserData(data: User[]): UserData[]{
    let tempVal: UserData[] = [{
        userID: '', 
        Username: '', 
        Email: ''
    }];
    tempVal.splice(0,1); // Removing the blank initial post
    
    for (let dat of data){
            tempVal = [...tempVal, {
                userID: dat.id, 
                Username: dat.username, 
                Email: dat.email
                // Password is updated externally
                // Level is updated externally (such as in an email verification)
            }]; 
    }

    return(tempVal);
}