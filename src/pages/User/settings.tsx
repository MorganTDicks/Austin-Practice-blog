// Settings Page (Currently just edit user)

import UserInput from "@/Components/account/userinput";
import userContext from "@/Context/datawrappers/userwrapper";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import { User } from "@/Declarations/UserTypes";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import { getUser } from "@/Utilities/datatools/dataitools";
import { useContext } from "react";

export default function SettingsPage(){
    const arrUsers: User[] = useContext(userContext).value;
    let contex = useContext(loginContext);
    let currentUser = getUser(arrUsers, contex.value);
    
    return(
        <>
            <MainLayout pagename ="Create Account">
                <UserInput 
                    href="/User" 
                    backto="<- Back to Dashboard" 
                    purpose="Edit your Profile (Enter old password to proceed)" 
                    buttontext="Save Changes" 
                    newuser="false" 
                    initialvalues={currentUser}
                />
            </MainLayout>
        </>
    )
}