import GenericInput from "@/Components/generic/genericinput";
import postContext from "@/Context/datawrappers/postwrapper";
import { Post } from "@/Declarations/PostTypes";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import DataImporter from "@/Utilities/dataimporter";
import Link from "next/link";
import { useContext, useState } from "react";

export default function NewPost(){
    let [newPost, setNewPost] = useState<Post>(DataImporter.initialPost);
    let postContex = useContext(postContext);

    function formSubmitHandler(){
        
    }

    return (
        <>
        <MainLayout pagename="Suggest a Post">
            <form onSubmit={formSubmitHandler}> 
                {/* Searchbar is this? */}
                <div>
                    <GenericInput 
                        label="Post Title" 
                        type="text" 
                        value={newPost.header}
                        onChange={
                            (event: any) => setNewPost((prevPost) => ({...prevPost, title: event.target.value}))} 
                    /> 
                </div>
                <div>
                    <select>
                        {postContex.value.map((p) => {
                            return (<option value={p.topic}> {p.topic} </option>)
                        })}
                    </select>
               </div>
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