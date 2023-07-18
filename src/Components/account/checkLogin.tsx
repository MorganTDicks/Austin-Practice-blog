// Act as an inturrupt that replaces whatever content inside of it with a button to login if not logged in already. 

export default function CheckLogin(props: any){
    
    let displayText = props.displayText;
    let redirectLink = props.redirectLink;
    
    // Receive link of page to forward to once logged in. 

    // Check logged in context
    // if logged in, return props.children. else, show button to log in (receive text for this as a prop) and return to this page once logged in. 
    
    return(
        <>
            {props.children}
        </>
    )
}