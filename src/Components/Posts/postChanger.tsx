import Link from "next/link";
import GenericInput from "../generic/genericinput";
import SearchFilter from "../SearchFilter/searchfilter";
import MainLayout from "@/Layouts/mainlayout/mainlayout";
import { usePostChange } from "@/hooks/usepostchange/usePostChange";

export function PostChanger(props: any){
    let addType: string = props.addType;
    // If a new post, postID & UserID are undefined
    let postID: string| undefined = props.postID; 
    let userID: string | undefined = props.userID;
    
    const {
        pageName,
       formSubmitHandler,
        newPost,
        setNewPost, 
        isValid, 
        hintString
    } = usePostChange(addType, userID, postID);
    
    // Retrieving the title and theme from the searchfilter input component
    function getState(inputState: any){
        setNewPost((prevPost) => ({...prevPost, header: inputState.searchkey}));
        setNewPost((prevPost) => ({...prevPost, topic: inputState.theme}));
    }

    return (
        <MainLayout pagename={pageName}>
        <form onSubmit={formSubmitHandler}> 
            <SearchFilter getstate={getState} inpTheme={newPost.topic} inpSearchKey={newPost.header}/>
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
            {/* Also add a save as draft button or checkbox */}
            <button 
                type="submit" 
                disabled={!isValid}
                style={isValid? {color: "white", backgroundColor: "green"} 
                    : {color: "silver", backgroundColor: "grey"}}
            > Submit </button>
            {isValid || <p> Hint: {hintString} </p>}
        </form>
        </MainLayout>
    )
}