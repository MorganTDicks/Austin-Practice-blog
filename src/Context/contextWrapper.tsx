import { CommentsProvider } from "./datawrappers/commentswrapper";
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
                            <CommentsProvider>
                                {props.children}
                            </CommentsProvider>
                        </PostProvider>
                    </UserProvider>
                </RefProvider>    
            </LoginProvider>
        </>
    )
}