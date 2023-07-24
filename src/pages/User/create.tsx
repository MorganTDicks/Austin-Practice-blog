// Create Account

import UserInput from "@/Components/account/userinput";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import DataImporter from "@/Utilities/dataimporter";

// Can this page also be used for editing your account? 
// Yes, moved to dynamic UserInput component

export default function CreateAccount(){
    return(
        <>
            <MainLayout pagename ="Create Account">
                <UserInput 
                    href="/User/login" 
                    backto="<- Back to Login" 
                    purpose="Create Account" 
                    buttontext="Register" 
                    newuser="true" 
                    initialvalues={DataImporter.initialUser}
                />
            </MainLayout>
        </>
    )
}