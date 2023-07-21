// Login
// Gather the input data, check that it is valid, then send it through to auth to check with the database and set it as logged in. 

import MainLayout from "@/Layouts/mainlayout/mainlayout"
import GenericInput from "@/Components/generic/genericinput";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";
import { calkLogin } from "@/Utilities/auth/auth";
import { FormEvent, useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../../styles/components/login.module.css';

type TempUser = {username: string, password: string, isValid: boolean};

export default function LogIn(){
    const [inputUser, setInputUser] = useState<TempUser>({username: '', password: '', isValid: false});
    const rout = useRouter();
    let contex = useContext(loginContext);
    let refContex = useContext(refContext);

    function logInHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        let passuid = calkLogin(inputUser.username, inputUser.password);
        if (!passuid){
            alert('Incorrect username or password');
            setInputUser((prevUser) => ({...prevUser, password: ''}));
            return;
        }

        // Passed
        console.log('Login Successful');
        
        // Store logged in user in context.
        contex.changer(passuid);
        console.log(contex.value);
        
        // Clearing Inputs
        setInputUser({username: '', password: '', isValid: false});

        // redirect to previous page once logged in
        let prevLink = refContex.value || '/'; // Save the link in context or go home

        // Note: router does not preload page in production build. Will need to impliment preloading manually at a later stage. 
        rout.push(prevLink);
    }



    function usernameHandler(id: string, val: string){
        if (id === 'username'){
            setInputUser((prevName) => ({...prevName, username: val}));
         } else
            setInputUser((prevName) => ({...prevName, password: val})); 
    }
        
    // Checking validity of inputs before enabling login button (useEffect)     
    useEffect(()=>{
        let timia = setTimeout(()=>{
            // Check input validity
            if ((inputUser.password.length >= 8) && (inputUser.username.length > 0))
                inputUser.isValid=true;
        }, 500) // Show a loading arrow on the button while the timer is going?

        return() => {
            clearTimeout(timia);
        }

    }, [inputUser.username, inputUser.password]);
    
    return(
        <>
            <MainLayout pagename="Log In">
                <div className={styles.divstuff}>

                {/* Log In  */}
                <p className={styles.headerstuff}> Log In Page </p>
                
                <form onSubmit={logInHandler} className={styles.formstuff}>
                    <div className={styles.forminner}> 
                        <GenericInput label="UserName" type="text" value={inputUser.username} onChange={(event:any) => {usernameHandler('username', event.target.value)}} />
                    </div>
                    <div> 
                         <GenericInput label="Password" type="password" value={inputUser.password} onChange={(event:any) => {usernameHandler('password', event.target.value)}} />
                    </div>
                    <button type="submit" disabled={!((inputUser.isValid))} className={styles.buttonstuff} style={inputUser.isValid? {color: "white", backgroundColor: "green"} : {color: "silver", backgroundColor: "grey"}}> Log In </button>
                </form>
                
                <p> 
                    or <Link href="./create" className={styles.linkstuff}> Create an account</Link>.
                </p>

                </div>
            </MainLayout>
        </>
    )
}