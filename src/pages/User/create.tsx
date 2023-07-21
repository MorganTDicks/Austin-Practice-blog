// Create Account

// Can this page also be used for editing your account? 
// maybe even for adding / editing a post? but maybe that's too far. 


import MainLayout from "@/Layouts/mainlayout/mainlayout";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import DataImporter from "@/Utilities/dataimporter";
import GenericInput from "@/Components/generic/genericinput";
import userContext from "@/Context/datawrappers/userwrapper";
import { User } from "@/Declarations/UserTypes";
import { useRouter } from "next/router";

// Redirect to dashboard once account created


export default function CreateAccount(){
    
    const [newUser, setNewUser] = useState({...(DataImporter.initialUser), password: ''});
    let [isValid, setIsValid] = useState<boolean>(false);
    let contex = useContext(userContext);
    let rout = useRouter();
    
    // Input Checking
    useEffect(()=>{
        let timia = setTimeout(()=>{
            // Check input validity
            if ((newUser.email.indexOf('@') !== -1) && (newUser.password.length >= 8) && (newUser.name.length > 0) && (newUser.surname.length > 0)){
                setIsValid(true);
            }
        }, 500)

        return() => {
            clearTimeout(timia);
        }
    }, [newUser])

    function createUserAccountHandler(event: FormEvent<HTMLFormElement>){
            event.preventDefault();  
            
            // Calculate ID
            newUser.id = calcID(newUser.name, newUser.surname, contex.value);

            // Saving new User.
            contex.changer(newUser);
            console.log(contex.value[contex.value.length-1]);

            // TODO: Save Password

            // Clearing the forms once the user has been added. 
            setNewUser({...(DataImporter.initialUser), password: ''});

            // redirect to the login screen
            rout.push('/User/login');

    }

    function inputUpdateHandler(id: string, val: string){
        switch (id){
            case 'email':
                setNewUser((prevUser) => ({...prevUser, email: val}));
                break;
            case 'name':
                setNewUser((prevUser) => ({...prevUser, name: val}));
                break;
            case 'surname': 
                setNewUser((prevUser) => ({...prevUser, surname: val}));
                break; 
            case 'username':
                setNewUser((prevUser) => ({...prevUser, username: val}));
                break;
            case 'password': 
                setNewUser((prevUser) => ({...prevUser, password: val}));
                break; 
        } 
    }

    return(
        <>
            <MainLayout pagename ="Create Account">
                {/* Log In  */}
                <Link href="./login"> {`<-`} Back to Login </Link>
                <p> Create Account </p>
                <form onSubmit={createUserAccountHandler}>
                    <table>
                        <tbody> 
                            <tr>
                                <GenericInput label="E-Mail" type="email" onChange={(event: any) => inputUpdateHandler('email', event.target.value)} value={newUser.email}/> 
                            </tr>
                            <tr>
                                <GenericInput label="First Name" type="text" onChange={(event: any) => inputUpdateHandler('name', event.target.value)} value={newUser.name}/>
                            </tr>
                            <tr>
                                <GenericInput label="Last Name" type="text" onChange={(event: any) => inputUpdateHandler('surname', event.target.value)} value={newUser.surname}/>
                            </tr>
                            <tr>
                                <GenericInput label="Username" type="text" onChange={(event: any) => inputUpdateHandler('username', event.target.value)} value={newUser.username}/>
                            </tr>
                            <tr>
                                <GenericInput label="Password" type="password" onChange={(event: any) => inputUpdateHandler('password', event.target.value)} value={newUser.password}/>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" disabled={!(isValid)}> Register </button>
                </form>
            </MainLayout>
        </>
    )
}

function calcID(firstname: string, surname: string, arrUsers: User[]){
    // Copy first letter of firstname
    let fnn = firstname.slice(0,1);

    // Copy first letter of lastname
    let lnn = firstname.slice(0,1);

    // Generate random number for remaining characters
    let rand = Math.floor(Math.random() * (999999 - 99999) + 99999); // Expected random between 99999 & 999999

    // Check if number already taken, if so, incriment by 1. 
    let pass = true;
    do{
        for (let u of arrUsers){
            if (u.id.slice(0,2) == `${fnn}${lnn}`){
                if (+u.id.slice(3,9) == rand){
                    rand += 1; 
                    pass=false;
                }
            }
        }
    } while(!pass)
    
    let finalID = `${fnn}${lnn}${rand}`;

    // Sample: "AA000000"
    // Received: "AA678430"
    return(finalID);
}