import postContext from "@/Context/datawrappers/postwrapper";
import type { Post } from "@/Declarations/PostTypes";
import React, { useContext, useEffect, useState} from "react";
import GenericInput from "../generic/genericinput";
import { getThemes } from "@/Utilities/datatools/dataitools";

export default function SearchFilter(props: any){
    
    let allPosts: Array<Post> = useContext(postContext).value;
    let allThemes = getThemes(allPosts);
    
    let showOrder: boolean = props.order;
    
    let [stateStuff, setStateStuff] = useState({
        theme: props.inpTheme || allThemes[0],
        searchkey: props.inpSearchKey || '',
        orderby: ''
    })
    
    // Pass up to parent: theme, searchkey, orderby. I.E stateStuff
    let getState = props.getstate;
    useEffect(()=>{
        getState(stateStuff);
    }, [stateStuff])

    return(
        <>
            <div>
                <GenericInput 
                    label="Post Title" 
                    type="text" 
                    value={stateStuff.searchkey}
                    onChange={
                        (event: any) => setStateStuff((prevState) => ({...prevState, searchkey: event.target.value}))} 
                /> 
            </div>
            <select 
                value={stateStuff.theme}
                onChange={
                    (event: any) => setStateStuff((prevState) => ({...prevState, theme: event.target.value}))} 
            > 
                {allThemes.map((theme) => {
                    return(
                        <> 
                            <option value={theme} key={theme.toLowerCase()}> 
                                {theme}
                            </option>
                        </>
                    )
                })}    
            </select>
            {showOrder && <p> Show Order</p>}
        </>
    )
}
