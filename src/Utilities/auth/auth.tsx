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
    let tokenstuff = calcMockToken(accid);
    return((userPassed && passwordPassed) && tokenstuff);
}

function calcMockToken(uID: string){ // uID format: II000000
    // Supposed mock token format: `${CurrentDate}.${UserID}.${2 random letters}${1 Random Letter}`
    // For now the information is stored planely to make testing easier. 
    // On actual auth server, the authkey will have each piece of information encrypted. 

    // let tokenLevel = fetchUserLevel(uID);
    let returnToken: string =`${calcDateString()}.${uID}.${getRandomLetter()}${getRandomLetter()}${getRandomLetter()}`;
    console.log('Token generated: ', returnToken);
    return(returnToken);
}

export function getUserLevel(inputToken: string){
    // validate the input token each time it is received. 

    let level = 3;
    
    // let iID = getUserID(inputToken);
    // let result = await fetch(`/api/users/${iID}`);
    // let level = await result.json();
    
    return (level);

}

export function getUserID(inputToken: string): string{ // Token Format: `${CurrentDate}.${UserID}.${2 random letters}${1 Random Letter}`
    // Validate the token
    // retrieve the logged in user ID from the token. 

    // if ((!inputToken) || (inputToken.length !== 24)){
    //     console.log('no token to derive id. Waiting... ');
    //         return('')
    // }
    console.log('inputtoken', inputToken)

    // Copy everything after the date
    let firstDotIndex = inputToken.indexOf('.');
    let slice1 = inputToken.slice(firstDotIndex+1, inputToken.length);
    
    // Copy the user ID
    let secondDotIndex = inputToken.indexOf('.');
    let slice2 = slice1.slice(0, secondDotIndex-2);
    
    console.log('ID retrieved from token: ', slice2);
    return(slice2)
}

// function checkUserPermissions(inputToken: string, requestePermission: string){ 
    // Cannot return boolean as the result of the function can be easily faked if inturrupted
    // Store the permission hidden in the token instead
// }

// export function getUserLevel(inputToken: string): number{
//     // gets the user level from the token
//     // if (inputToken == '') return (0); 
//     // Should it not maybe check the level and return something that cannot be faked? 
//     let returnToken = (inputToken.charAt(inputToken.length-2));
//     console.log('returntoken', returnToken)
//     return (+returnToken)
// }