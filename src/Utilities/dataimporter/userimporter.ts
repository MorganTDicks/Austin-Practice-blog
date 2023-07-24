import type { User } from "@/Declarations/UserTypes";
import { useState } from "react";
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
    // const [arrUsers, setArrUsers] = useState<User[]>(dummyUsers); //ERROR: Cannot read propperty of null state     // THIS IS NOT A REACT COMPONENT. THAT'S WHY
    // return(arrUsers);  

    return(dummyUsers);
}

export default UserImporter;

// Working on: AddUser (create user)

export function initialiseUser(): User{
    return({id: '', username: '', name: '', surname: '', email: ''})
}