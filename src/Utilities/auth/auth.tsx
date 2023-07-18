import DataImporter from "../dataimporter";

export function checkLogin(username: string, password: string): boolean{
    
    // Input validation is done before data is passed to this function. 

    // FINDING & CHECKING USERNAME

    let accid: string = ''; 
    let userPassed=false;
    let passwordPassed = false;

    for (let user of DataImporter.importUsers){
        if ((user.username === username)){
            accid = user.id; 
            userPassed=true;
        }
    }

    // IMPORTING & CHECKING PASSWORD

    // Consider passing password through other means?
    passwordPassed=true;

    // IF PASSED

    // TODO: Store logged in user in context.

    return (userPassed && passwordPassed);
    
}