import { User } from "@/Declarations/UserTypes";
import { calcDateString, getRandomLetter } from "../datatools/dataitools";
import { UserData } from "@/Declarations/DBTypes";

export function MockAuthServer(username: string, password: string, arrUsers: User[]){// would it not be better to encrypt the password, even if it is just local?
    // This is the mock authentication server

    // Check validity. if valid, generate and return key. 
    // Input cleansing is done before data is passed to the auth server (this function). 

    // FINDING & CHECKING USERNAME
    let accid: string = ''; 
    let userPassed=false;
    let passwordPassed = false;

    for (let user of arrUsers){
        if ((user.username === username)){
            accid = user.id; 
            userPassed=true;
        }
    }

    // IMPORTING & CHECKING PASSWORD

    // Consider passing password through other means?
    passwordPassed=true;
    
    // Receive key from auth server
    // For now, generates a key using MockAuthServer Function, which then must be stored in context? Or rather, store the authkey in a session or in a local file? 
    
    // Instead of returning user id, return an authentication token.
    return((userPassed && passwordPassed) && calcMockToken(accid));
}

function calcMockToken(uID: string){ // uID format: II000000
    // Supposed mock token format: `${CurrentDate}.${UserID}.${2 random letters}${userLevel}${1 Random Letter}`
    // For now the information is stored planely to make testing easier. 
    // On actual auth server, the authkey will have each piece of information encrypted. 

    let returnToken: string = `${calcDateString()}.${uID}.${getRandomLetter()}${getRandomLetter()}${fetchUserLevel(uID)}${getRandomLetter()}`;
    console.log('Token generated: ', returnToken);
    return(returnToken);
}

function fetchUserLevel(iID: string): number{
    // Fetching the data from api
    let dbData: UserData[] = [{
        userID: '', 
        Username: '', 
        Email: '',
        Level: 0
    }];

    fetch("/api/users").then(async res => await res.json()).then((json: any) => {dbData = json});  

    console.log(dbData); // Returns blank, meanind it is not waiting for fetch. 
    // Also, userID is fetched around 2-6 times each time the page is changed. 
    let level = 0;

    dbData.map((dat)=>{
        if (dat.userID == iID){
            console.log('found')
            level = ((dat.Level || 0));
            return
        }
    })
    console.log('not found');
    return (level);

}

export function getUserID(inputToken: string): string{ // Token Format: `${CurrentDate}.${UserID}.${2 random letters}${userLevel}${1 Random Letter}`
    // retrieve the logged in user ID from the token. 

    // Copy everything after the date
    let firstDotIndex = inputToken.indexOf('.');
    let slice1 = inputToken.slice(firstDotIndex+1, inputToken.length);
    
    // Copy the user ID 
    let secondDotIndex = inputToken.indexOf('.');
    let slice2 = slice1.slice(0, secondDotIndex-2);

    console.log('ID retrieved from token: ', slice2);
    return(slice2);
}

// function checkUserPermissions(inputToken: string, requestePermission: string){ 
    // Cannot return boolean as the result of the function can be easily faked if inturrupted
    // Store the permission hidden in the token instead
// }

export function getUserLevel(inputToken: string): number{
    // gets the user level from the token
    if (inputToken == '') return (0); 
    // Should it not maybe check the level and return something that cannot be faked? 
    return (+(inputToken.charAt(inputToken.length-1)))
}