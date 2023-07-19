import { useContext } from "react";
import loginContext from "@/Context/contextwrapper/contextwrapper";
import Link from "next/link";

// Act as an inturrupt that replaces whatever content inside of it with a button to login if not logged in already. 

export default function CheckLogin(props: any){
    let label = props.label;
    let className = props.className;
    let style = props.style;
    
    // Receive link of page to forward to once logged in. 
    let href = props.href; //TODO: Redirect to previous page once logged in. 
    
    // Get logged in context
    let contex = useContext(loginContext);

    // if logged in, return props.children. else, show link to log in page (receive text for this as a prop) and forward to props.href page once logged in. 
    return(
        <>
            {!contex.value && <p className={className} style={style}> <Link href={'/User/login'}> {label} </Link></p>}
            {contex.value && props.children}
        </>
    )
}