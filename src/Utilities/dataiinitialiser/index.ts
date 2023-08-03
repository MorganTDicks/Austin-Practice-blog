const DataInitialiser = {
        // Local Stuff: 
        initialPost: initialisePost(),
        initialUser: initialiseUser(),
        initialComment: initialiseComment(),
        // DB Stuff: 
        initialPostData: initialisePostData(),
        initialUserData: initialiseUserData()
};

export default DataInitialiser;

import type { Post } from "@/Declarations/PostTypes";
import type { Comments } from "@/Declarations/PostTypes";
import type { User } from "@/Declarations/UserTypes";
import { CommentsData, PostData } from "@/Declarations/DBTypes";

// ==================== Local ================================

export function initialiseComment(): Comments{
    return({
        pid: '',
        uid: '',
        likes: 0,
        body: '',
        activitydate: ''
    })
}


export function initialisePost(): Post{
    return({id:'', topic: '', postdate: '', header: '', body: ''});
}


export function initialiseUser(): User{
    return({id: '', username: '', name: '', surname: '', email: ''})
}


// ==================== DataBase ==================================

// export function initialiseCommentData(): CommentsData{
//         return()
// }

export function initialisePostData(): PostData{
return({ 
        postID: '', 
        Header: '',
        Body: '',
        Topic: '',
        PostDate: '', 
        Status: ''
})
}

export function initialiseUserData(){
        return ({
                userID: '', 
                Username: '', 
                Email: ''
                // rest of the fields are optional.
            })
}