// Login
// Gather the input data, check that it is valid, then send it through to auth to check with the database and set it as logged in. 

import MainLayout from "@/Layouts/mainlayout/mainlayout"
import GenericInput from "@/Components/generic/genericinput";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { checkLogin } from "@/Utilities/auth/auth";

type TempUser = {username: string, password: string, usernameisValid: boolean, passwordisValid: boolean};


export default function LogIn(){
    const [inputUser, setInputUser] = useState<TempUser>({username: '', password: '', usernameisValid: false, passwordisValid: false});

    function logInHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        if (!checkLogin(inputUser.username, inputUser.password)){
            alert('Incorrect username or password');
            setInputUser((prevUser) => ({...prevUser, password: ''}));
            return;
        }

        // Passed
        console.log('Login Successful');
        
        // Clearing Inputs
        setInputUser({username: '', password: '', usernameisValid: false, passwordisValid: false});

        /* ... */ // redirect to previous page once logged in
            // useNavigate()?
            // receive previous page link as a 
    }



    function usernameHandler(id: string, val: string){
        if (id === 'username'){
            setInputUser((prevName) => ({...prevName, username: val}));
         } else
            setInputUser((prevName) => ({...prevName, password: val})); 
    }
        
    // TODO: Check validity of inputs before enabling login button (useEffect)     
    useEffect(()=>{
        let timia = setTimeout(()=>{
            // Check input validity
            if (inputUser.password.length >= 8)
                inputUser.passwordisValid=true;
            if (inputUser.username.length > 0)
                inputUser.usernameisValid=true;
            console.log('check validity here');
        }, 500)

        return() => {
            clearTimeout(timia);
            console.log('cleared timeout.');
        }

    }, [inputUser.username, inputUser.password]);
    
    return(
        <>
            <MainLayout pagename="Log In">

                {/* Log In  */}
                <p> Log In Page </p>
                
                <form onSubmit={logInHandler}>
                    <div> 
                        <GenericInput label="UserName" type="text" value={inputUser.username} onChange={(event:any) => {usernameHandler('username', event.target.value)}} />
                    </div>
                    <div> 
                         <GenericInput label="Password" type="password" value={inputUser.password} onChange={(event:any) => {usernameHandler('password', event.target.value)}} />
                    </div>
                    <button type="submit" disabled={!((inputUser.passwordisValid) && (inputUser.usernameisValid))}> Log In </button>
                </form>
                
                <p> 
                    or <Link href="./create"> Create an account</Link>.
                </p>

            </MainLayout>
        </>
    )
}