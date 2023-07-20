// Create Account

// Can this page also be used for editing your account? 
// maybe even for adding / editing a post? but maybe that's too far. 


import MainLayout from "@/Layouts/mainlayout/mainlayout";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { User } from "@/Declarations/UserTypes";
import DataImporter from "@/Utilities/dataimporter";
import GenericInput from "@/Components/generic/genericinput";

// Redirect to dashboard once account created


export default function CreateAccount(){
    
    const [newUser, setNewUser] = useState<User>(DataImporter.initialUser);

    function createUserAccountHandler(event: FormEvent<HTMLFormElement>){
            /* ... */
            event.preventDefault();  
            // TODO - Input Checking
            
            // Adding user requires states, pushing data up or context. Either way, i can't do this yet. 
            console.log(newUser);

            // Clearing the forms once the user has been added. 
            setNewUser(DataImporter.initialUser);


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



    // function userInfoHandler(id, value) () {} // ID will be calculated when submit button is clicked. 

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
                                {/*<td> <label> E-Mail </label> </td>
                                <td> <input type="text" onChange={(event) => inputUpdateHandler('email', event.target.value)} value={newUser.email}/> </td> */}
                            </tr>
                            <tr>
                                <GenericInput label="First Name" type="text" onChange={(event: any) => inputUpdateHandler('name', event.target.value)} value={newUser.name}/>
                                {/* <td> <label> First Name </label> </td>
                                <td> <input type="text" onChange={(event) => inputUpdateHandler('name', event.target.value)} value={newUser.name}/> </td> */}
                            </tr>
                            <tr>
                                <GenericInput label="Last Name" type="text" onChange={(event: any) => inputUpdateHandler('surname', event.target.value)} value={newUser.surname}/>
                                {/* <td> <label> Last Name </label> </td>
                                <td> <input type="text" onChange={(event) => inputUpdateHandler('surname', event.target.value)} value={newUser.surname}/> </td> */}
                            </tr>
                            <tr>
                                <GenericInput label="Username" type="text" onChange={(event: any) => inputUpdateHandler('username', event.target.value)} value={newUser.username}/>
                                {/* <td> <label> Username </label> </td>
                                <td> <input type="text" onChange={(event) => inputUpdateHandler('username', event.target.value)} value={newUser.username}/> </td> */}
                            </tr>
                            <tr>
                                {/* <GenericInput label="Password" type="text" onChange={(event: any) => inputUpdateHandler('password', event.target.value)} value={newUser.password}/> */}
                                {/* <td> <label> Password </label> </td>
                                <td> <input type="password" onChange={(event) => inputUpdateHandler('password', event.target.value)}/> </td> */}
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit"> Register </button>
                </form>
            </MainLayout>
        </>
    )
}