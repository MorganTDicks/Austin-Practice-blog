// Dashboard

import Housing from "@/Components/housing/housing";
import Link from "next/link";

// Redirect to login if not yet logged in. 


export default function Dashboard(){
   
    
    return(
        <>
            <Housing pagename ="Dashboard">
                {/* Log In  */}
                <p> Dashboard </p>
                <Link href="./User/login"> Login </Link>
            </Housing>
        </>
    )
}