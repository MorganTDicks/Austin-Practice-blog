import SearchFilter from "@/Components/SearchFilter/searchfilter";
import GenericInput from "@/Components/generic/genericinput";
import postContext from "@/Context/datawrappers/postwrapper";
import userContext from "@/Context/datawrappers/userwrapper";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import refContext from "@/Context/refdirectwrapper/refdirectwrapper";
import { Post } from "@/Declarations/PostTypes";
import { User } from "@/Declarations/UserTypes";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import { getUserID } from "@/Utilities/auth/auth";
import DataImporter from "@/Utilities/dataimporter";
import { calcDateString, containsSpecialChars, getUser, isUniquePost } from "@/Utilities/datatools/dataitools";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function NewPost(){
    let postContex = useContext(postContext);
    const arrUsers: User[] = useContext(userContext).value;
    let loggedinID = getUserID(useContext(loginContext).value);
    let [newPost, setNewPost] = useState<Post>(DataImporter.initialPost);
    let [isValid, setIsValid] = useState<boolean>(false);
    let [hintString, setHintString] = useState<string>('');
    

    // If not logged in, redirect back to login page.
    const rout = useRouter();
    let refContex = useContext(refContext);
    useEffect(()=>{
        if (loggedinID.length < 1){
            refContex.changer('/newpost');
            rout.push('/User/login');
        }
    }, [])

    
    function calcID(){
        // Generate post id by Replacing all spaces with dashes, and set to lower case
        return (newPost.header.toLowerCase().split(" ").join("-"));
    }

    // Update the context with the new values stored in state
    function formSubmitHandler(){
        newPost.id = calcID();
        newPost.postdate = calcDateString();
        newPost.suggester = getUser(arrUsers, loggedinID);
        console.log(newPost);
        postContex.changer(newPost);
    }

    // Retrieving the title and theme from the searchfilter input component
    function getState(inputState: any){
            setNewPost((prevPost) => ({...prevPost, header: inputState.searchkey}));
            setNewPost((prevPost) => ({...prevPost, topic: inputState.theme}));
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


    return (
        <>
        <MainLayout pagename="Suggest a Post">
            <form onSubmit={formSubmitHandler}> 
                <SearchFilter getstate={getState}/>
                <div> 
                    <GenericInput 
                        label="Body" 
                        type="text" 
                        value={newPost.body}
                        onChange={
                            (event: any) => setNewPost((prevPost) => ({...prevPost, body: event.target.value}))} 
                    /> 
                </div>
                <p> By submitting a post suggestion, you agree <Link href="/" className="linkstuff"> Terms and Conditions </Link> </p>
                <button 
                    type="submit" 
                    disabled={!isValid}
                    style={isValid? {color: "white", backgroundColor: "green"} 
                        : {color: "silver", backgroundColor: "grey"}}
                > Submit your suggestion </button>
                {isValid || <p> Hint: {hintString} </p>}
            </form>
        </MainLayout>
        </>
    )
}
