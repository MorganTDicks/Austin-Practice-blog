import { useContext, useEffect } from "react";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import Link from "next/link";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";

// Acts as an inturrupt that replaces whatever content inside of it with a button to login if not logged in already. 

export default function CheckLogin(props: any){
    let label = props.label;
    let className = props.className;
    let style = props.style;
    
    // Get logged in context
    let contex = useContext(loginContext);

    // Receive link of page to forward to once logged in. 
    let refContex = useContext(refContext);
    let redirectTo = props.redirectTo;
    useEffect(()=>{ 
        refContex.changer(redirectTo); // React doesn't like changing states from other components, as such it must be wrapped in a useEffect. 
    }, [])

    // if logged in, return props.children. else, show link to log in page (receive text for this as a prop) and forward to props.href page once logged in. 
    return(
        <>
            {contex.value && props.children}
            {!contex.value && <div className={className} style={style}> <Link href={'/User/login'}> {label} </Link> </div>}
        </>
    )
}