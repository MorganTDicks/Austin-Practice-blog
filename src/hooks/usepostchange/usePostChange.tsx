import postContext from "@/Context/datawrappers/postwrapper";
import userContext from "@/Context/datawrappers/userwrapper";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import { Post } from "@/Declarations/PostTypes";
import { User } from "@/Declarations/UserTypes";
import { getUserID, getUserLevel } from "@/Utilities/auth/auth";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import { calcDateString, containsSpecialChars, getPost, getUser, isUniquePost } from "@/Utilities/datatools/dataitools";
import { useContext, useEffect, useState } from "react";

export function usePostChange(addType: string, userID?: string, postID?: string){
    // if postID is provided, it is an edit post. 
    // if not provided, it is a new post. 
    
    let arrPosts: Post[] = useContext(postContext).value;
    const arrUsers: User[] = useContext(userContext).value;
    const workingID = userID || getUserID(useContext(loginContext).value);
    const authLevel = getUserLevel(workingID);

    const {pageName, starterPost, postStatus} = getNameStatusStarter(arrPosts, arrUsers, authLevel, addType, workingID, postID);

    const postContex = useContext(postContext);
    const [newPost, setNewPost] = useState<Post>(starterPost);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [hintString, setHintString] = useState<string>('');

    function calcID(){
        // Generate post id by Replacing all spaces with dashes, and set to lower case
        return (newPost.header.toLowerCase().split(" ").join("-"));
    }

    // Update the context with the new values stored in state
    function formSubmitHandler(){
        newPost.id = newPost.id || calcID();
        newPost.postdate = newPost.postdate || calcDateString();
        // newPost.suggester = getUser(arrUsers, workingID);
        console.log(newPost);
        postContex.changer(newPost, addType);
    }

    // Input Checking (no special chars, no blank entries, theme cannot be 'Select theme', etc.)
    useEffect(()=>{
        let timia = setTimeout(()=>{
            // Check input validity
            setIsValid(checkPostValidity(newPost));
        }, 500)

        return() => {
            clearTimeout(timia);
        }
    }, [newPost])

    function checkPostValidity(newPost: Post): boolean{   
        // Check if body or title are empty
        if ((newPost.body.length < 1) || (newPost.header.length < 1)){
            setHintString('Please fill in all fields');
            return(false);
        }
        // Check if theme is 'select theme'
        console.log(newPost.topic);
        if ((newPost.topic == 'Select Theme') || (newPost.topic=='')){
            setHintString('Please select a theme.');
            return(false);
        }
        // Check title for special characters
        if (containsSpecialChars(newPost.header)){
            setHintString('Title cannot contain any special characters');
            return(false);
        }
        // Check if post title is unique
        if (!isUniquePost(postContex.value, newPost.header)){
            setHintString('Title already taken.');
            return(false);
        }
        // Impliment character limits? 
        return(true)
    }

    return({
        pageName: pageName,
        formSubmitHandler: formSubmitHandler,
        newPost: newPost,
        setNewPost: setNewPost, 
        isValid: isValid, 
        hintString: hintString
    })

}

function getNameStatusStarter(arrPosts: Post[], arrUsers: User[], authLevel: number, addtype: string, userID: string, postID?: string){
    /* Scenarios: 
        a. post is an edit suggestion (level 1), therefore ID must be the existingID-UserID (before). status is draft or pending. 
        b. post is a new Suggestion (level 1), therefore the ID must be based off the title & suggester must be userID. (after). status is draft or pending. 
        c. post is an admin edit (level 2 or 3), therefore ID must be the existing post ID (before). status is draft or approved. 
        d. post is a new post (level 2 or 3), therefore the ID must be based off the input title. (after) status is draft or approved. 
    */

    let starterPost: Post = DataInitialiser.initialPost;
    let pageName: string = '';
    let poststatus = '';

    if ((authLevel === 0) || (authLevel === 1)){ 
        poststatus = 'pending';

        // a. post is an edit suggestion        
        if (addtype == 'replace'){ 
            // Note: Once a suggestion is approved, the original post is replaced by the suggestion. The ID of the original post is kept. 
            
            let suggestedID = `${postID}-${userID}`;
            
            // Check if post with same ID alread exists. If so, load that post. 
            // TODO: Fetch array of Suggested posts, instead of only the approved posts. 
            
            // If does not exist already
            // Create a copy of the post with the user id appended 
            
            pageName = "Suggest an Edit";
            starterPost = {...getPost(arrPosts, postID!), id: suggestedID};

        }
        
        // b. post is a new Suggestion
        else { 
            pageName = "Suggest a Post";
            starterPost = {... DataInitialiser.initialPost, suggester: getUser(arrUsers, userID)}; 
        }

    } else { // User level is 2 or 3
        poststatus = 'approved';

        // c. post is an admin edit
        if (addtype == 'replace'){ 
            // Post is to be edited and overwritten 
            pageName = "Edit Post";
            starterPost = {...getPost(arrPosts, postID!)};
        }

        // d. post is a new post
        else{ 
            pageName = "New Post";
            starterPost = DataInitialiser.initialPost;
        }
    }

    return ({
        pageName: pageName, 
        starterPost: starterPost, 
        postStatus: poststatus
    })
}