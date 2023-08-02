// This must be anchored to the bottom of the screen for postlayout

import { FormEvent, useContext, useEffect, useState } from "react";
import GenericInput from "../generic/genericinput";
import { Comments } from "@/Declarations/PostTypes";
import DataImporter from "@/Utilities/dataimporter";
import commentsContext from "@/Context/datawrappers/commentswrapper";
import { calcDateString } from "@/Utilities/datatools/dataitools";

export default function AddComment(props: any){
    const commentContex = useContext(commentsContext);
    const [commentState, setCommentState] = useState<Comments>(DataImporter.initialComment);

    function formSubmitHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        commentContex.changer(commentState);
        console.log('added post: ', commentState);

        setCommentState(DataImporter.initialComment);
    }

    useEffect(() => {
            setCommentState((prevState) => ({...prevState, pid: props.postID}));
            setCommentState((prevState) => ({...prevState, uid: props.loggedinID}));
            setCommentState((prevState) => ({...prevState, activitydate: calcDateString()}));
            setCommentState((prevState) => ({...prevState, likes: 0}));
        }, [commentState.pid]) // Using the post 

    //TODO: Input sanitation. 

    return(
        <form onSubmit={(event) => {formSubmitHandler(event)}}>
            <p> Add a comment! </p>
            <GenericInput 
                id="comment"
                label="Add a comment: "
                onChange={(event: any) => {setCommentState((prevState) => ({...prevState, body: event.target.value}))}}
                value={commentState.body}
            />
            <button type="submit" disabled={(commentState.body.length == 0)}> Post </button>
        </form>
    )
}