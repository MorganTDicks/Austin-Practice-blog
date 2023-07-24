import { User } from "@/Declarations/UserTypes";

export function calkLogin(username: string, password: string, arrUsers: User[]){
    
    // Input validation is done before data is passed to this function. 

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

    return((userPassed && passwordPassed) && accid);

    
}