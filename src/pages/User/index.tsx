// Dashboard

// Displays user profile information, also allows them to edit their profile or change settings. 
// Redirects to login if not yet logged in. 

import UserSummary from "@/Components/account/usersummary";
import AltLayout from "@/Layouts/altlayout/altlayout";
import styles from "../../styles/components/dashboard.module.css";
import UserActivity from "@/Components/account/useractivity";
// import Link from "next/link";
import loginContext from "@/Context/loginwrapper/loginwrapper"
import { getUser } from "@/Utilities/datatools/dataitools";
import { useContext } from "react"
import { User } from "@/Declarations/UserTypes";
import Link from "next/link";

export default function Dashboard(){
    const contex = useContext(loginContext);
    let currentUser: User = getUser(contex.value);
    
    return(
        <AltLayout>
            <h1> Dashboard </h1>
            {/* <Link href="./User/login"> Login </Link> // Logging in now happens before visiting this page */}
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