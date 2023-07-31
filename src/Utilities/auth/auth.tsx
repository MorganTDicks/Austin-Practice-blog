import { User } from "@/Declarations/UserTypes";

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
    
    // Instead of returning a boolean, return an authentication token.
    return((userPassed && passwordPassed) && accid);

    
}