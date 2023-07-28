import SearchFilter from "@/Components/SearchFilter/searchfilter";
import GenericInput from "@/Components/generic/genericinput";
import postContext from "@/Context/datawrappers/postwrapper";
import loginContext from "@/Context/loginwrapper/loginwrapper";
import { Post } from "@/Declarations/PostTypes";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import DataImporter from "@/Utilities/dataimporter";
import { getCurrentDate, getUser } from "@/Utilities/datatools/dataitools";
import Link from "next/link";
import { useContext, useState } from "react";

export default function NewPost(){
    let [newPost, setNewPost] = useState<Post>(DataImporter.initialPost);
    let postContex = useContext(postContext);
    let currentUser = useContext(loginContext).value;

    function formSubmitHandler(){
        // Update the context with the new values stored in state
        newPost.id = calcID();
        newPost.postdate = calcPostDate();
        newPost.suggester = getUser(currentUser);
        postContex.changer(newPost);
    }

    function calcID(){
        // All special characters are cleaned before this function is called. 
        return (newPost.header.toLowerCase().split(" ").join(""));
    }

    function calcPostDate(){
        let dateStuff = getCurrentDate();
        return(`${dateStuff.currentyear}-${dateStuff.currentmonth}-${dateStuff.currentday}`);
    }

    function getState(inputState: any){
        setNewPost((prevPost) => ({...prevPost, header: inputState.searchkey}))
    }

    // TODO: Input Checking here (no special chars, no blank entries, theme cannot be 'Select theme', etc.)

    return (
        <>
        <MainLayout pagename="Suggest a Post">
            <SearchFilter getstate={getState}/>
            <form onSubmit={formSubmitHandler}> 
                {/* The below is covered by the searchfilter component already. */}
                {/* <div>
                    <GenericInput 
                        label="Post Title" 
                        type="text" 
                        value={newPost.header}
                        onChange={
                            (event: any) => setNewPost((prevPost) => ({...prevPost, header: event.target.value}))} 
                    /> 
                </div>
                <div>
                    <select>
                        {postContex.value.map((p) => {
                            return (<option value={p.topic}> {p.topic} </option>)
                        })}
                    </select>
               </div> */}
                <div> 
                    <GenericInput 
                        label="Body" 
                        type="text" 
                        value={newPost.body}
                        onChange={
                            (event: any) => setNewPost((prevPost) => ({...prevPost, body: event.target.value}))} 
                    /> 
                </div>
                <p> By submitting a post suggestion, you agree <Link href="/"> Terms and Conditions </Link> </p>
                <button type="submit"> Submit your suggestion </button>
            </form>
        </MainLayout>
        </>
    )
}