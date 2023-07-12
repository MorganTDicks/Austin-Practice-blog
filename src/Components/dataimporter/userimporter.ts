import type { User } from "@/Declarations/UserTypes";
function UserImporter(){      
            let arrUsers: Array<User> = [
                {id: "AA000000",
                username: "A_Acker", 
                password: "1234",
                name: "Austin",
                surname: "Ackermann", 
                email: "austin@al.co.za"}
            ];
                
            return(arrUsers);  
}

export default UserImporter;