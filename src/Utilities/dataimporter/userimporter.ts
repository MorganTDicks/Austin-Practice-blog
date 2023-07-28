import type { User } from "@/Declarations/UserTypes";
let dummyUsers: Array<User> = [
    {id: "AA000000",
    username: "A_Acker", 
    // password: "1234",
    name: "Austin",
    surname: "Ackermann", 
    email: "austin@al.co.za"},
    {id: "AA000111",
    username: "AusTwo", 
    // password: "1234",
    name: "Austin",
    surname: "Ackermann", 
    email: "austin@al.co.za"}
];
function UserImporter(){      
    return(dummyUsers);
}

export default UserImporter;

export function initialiseUser(): User{
    return({id: '', username: '', name: '', surname: '', email: ''})
}