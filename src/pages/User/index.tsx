// Dashboard

import MainLayout from "@/Layouts/mainlayout/mainlayout";
import Link from "next/link";

// Redirect to login if not yet logged in. 


export default function Dashboard(){
   
    
    return(
        <>
            <MainLayout pagename ="Dashboard">
                {/* Log In  */}
                <p> Dashboard </p>
                <Link href="./User/login"> Login </Link>
            </MainLayout>
        </>
    )
}