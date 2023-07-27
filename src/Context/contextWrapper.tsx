import { PostProvider } from "./datawrappers/postwrapper";
import { UserProvider } from "./datawrappers/userwrapper";
import { LoginProvider } from "./loginwrapper/loginwrapper";
import { RefProvider } from "./refdirectwrapper/refdirectwrapper";

export default function ContextWrapper(props: any){
    return(
        <>
            <LoginProvider>
                <RefProvider>
                    <UserProvider>
                        <PostProvider>
                            {props.children}
                        </PostProvider>
                    </UserProvider>
                </RefProvider>    
            </LoginProvider>
        </>
    )
}