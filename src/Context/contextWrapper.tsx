import { UserProvider } from "./datawrappers/userwrapper";
import { LoginProvider } from "./loginwrapper/loginwrapper";
import { RefProvider } from "./refdirectwrapper/refdirectwrapper";

export default function ContextWrapper(props: any){
    return(
        <>
            <LoginProvider>
                <RefProvider>
                    <UserProvider>
                        {props.children}
                    </UserProvider>
                </RefProvider>    
            </LoginProvider>
        </>
    )
}