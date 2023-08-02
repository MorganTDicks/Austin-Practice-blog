// Dashboard

// Displays user profile information, also allows them to edit their profile or change settings. 
// Redirects to login if not yet logged in. 

import UserSummary from "@/Components/account/usersummary";
import AltLayout from "@/Layouts/altlayout/altlayout";
import styles from "../../styles/components/dashboard.module.css";
import UserActivity from "@/Components/account/useractivity";
import loginContext from "@/Context/loginwrapper/loginwrapper"
import { getUser } from "@/Utilities/datatools/dataitools";
import { useContext, useEffect } from "react"
import { User } from "@/Declarations/UserTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";
import userContext from "@/Context/datawrappers/userwrapper";
import { getUserID } from "@/Utilities/auth/auth";

export default function Dashboard(){
    const loggedinID = getUserID(useContext(loginContext).value);
    const arrUsers: User[] = useContext(userContext).value;
    
    // If not logged in, redirect back to login page.
    const rout = useRouter();
    let refContex = useContext(refContext);
    useEffect(()=>{
        if (loggedinID.length < 1){
            refContex.changer('/User');
            rout.push('/User/login');
        }
    }, [])


    let currentUser: User = getUser(arrUsers, loggedinID);
    
    return(
        <AltLayout>
            <h1> Dashboard </h1>
            <table className={styles.tablestuff}> 
                <tbody>
                    <tr>
                        <td className={styles.userstuff}>
                            <UserSummary currentUser={currentUser}/>
                            <Link href="/User/settings"> Edit Profile </Link>
                        </td>
                        <td className={styles.followedstuff}> 
                            <UserActivity currentUser={currentUser}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p> Activity you follow (WIP) </p>
        </AltLayout>
    )
}