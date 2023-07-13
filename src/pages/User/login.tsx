// Login

import DataImporter from "@/Components/dataimporter";
import Housing from "@/Components/housing/housing"
import { User } from "@/Declarations/UserTypes";
import Link from "next/link";
import { FormEvent, useState } from "react";

// Investigate Context

type TempUser = {username: string, password: string};

export default function LogIn(){
    const [inputUser, setInputUser] = useState<TempUser>({username: '', password: ''});

    function logInHandler(event: FormEvent<HTMLFormElement>){
        let passed = false;
        event.preventDefault();
        let acc: User = DataImporter.initialUser;

        for (let user of DataImporter.importUsers){
            if ((user.username === inputUser.username) && (user.password === inputUser.password)){
                acc = user; 
                passed = true;
            }
        }
        
        if (!passed){
            alert('Incorrect username or password');
            setInputUser((prevUser) => ({...prevUser, password: ''}));
            return
        }
        console.log('Login Successful');
        
        
        /* ... */


        // Resetting inputUser
        setInputUser({username: '', password: ''});

    }

    function usernameHandler(id: string, val: string){
        if (id === 'username'){
            setInputUser((prevName) => ({...prevName, username: val}));
         } else
            setInputUser((prevName) => ({...prevName, password: val}));          
    }
    
    return(
        <>
            <Housing pagename="Log In">

                {/* Log In  */}
                <p> Log In Page </p>
                
                <form onSubmit={logInHandler}>
                    <div> 
                        <label> Enter username </label>
                        <input type="text" onChange={(event) => {usernameHandler('username', event.target.value)}} value={inputUser.username}/> 
                    </div>
                    <div> 
                        <label> Enter Password </label>
                        <input type="password" onChange={(event) => {usernameHandler('password', event.target.value)}} value={inputUser.password}/> 
                    </div>
                    <button type="submit"> Log In </button>
                </form>
                
                <p> 
                    or <Link href="./create"> Create an account</Link>.
                </p>

            </Housing>
        </>
    )
}