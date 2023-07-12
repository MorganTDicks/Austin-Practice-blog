// Dashboard

import Housing from "@/Components/housing/housing";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { User } from "@/Declarations/UserTypes";

// Redirect to dashboard once account created


export default function CreateAccount(){
    
    function createUserAccountHandler(event: FormEvent<HTMLFormElement>){
            /* ... */
            event.preventDefault();  
    }

    // function userInfoHandler(id, value) () {} // ID will be calculated when submit button is clicked. 

    return(
        <>
            <Housing pagename ="Create Account">
                {/* Log In  */}
                <Link href="./login"> {`<-`} Back to Login </Link>
                <p> Create Account </p>
                <form onSubmit={createUserAccountHandler}>
                    <table>
                        <tr>
                            <td> <label> E-Mail </label> </td>
                            <td> <input type="text"/> </td>
                        </tr>
                        <tr>
                            <td> <label> First Name </label> </td>
                            <td> <input type="text"/> </td>
                        </tr>
                        <tr>
                            <td> <label> Last Name </label> </td>
                            <td> <input type="text"/> </td>
                        </tr>
                        <tr>
                            <td> <label> Username </label> </td>
                            <td> <input type="text"/> </td>
                        </tr>
                        <tr>
                            <td> <label> Password </label> </td>
                            <td> <input type="password"/> </td>
                        </tr>
                    </table>
                </form>
            </Housing>
        </>
    )
}