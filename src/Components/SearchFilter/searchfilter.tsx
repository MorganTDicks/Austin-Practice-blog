import postContext from "@/Context/datawrappers/postwrapper";
import type { Post } from "@/Declarations/PostTypes";
import React, { useContext, useEffect, useState, useRef} from "react";
import GenericInput from "../generic/genericinput";

export default function SearchFilter(props: any){
    let allPosts: Array<Post> = useContext(postContext).value;
    let allThemes: Array<string> = ['Select Theme'];
    
    for (let p of allPosts){
        let theme = p.topic;
        if (allThemes.indexOf(theme) == -1)
            allThemes.push(theme);
    }
    
    let showOrder: boolean = props.order;

    let [stateStuff, setStateStuff] = useState({
            theme: allThemes[0],
            searchkey: '',
        orderby: ''
    })

    // Return: theme, searchkey, orderby. I.E stateStuff
    
    
    // Two options for this: Forward refs
    //  or passing data up to parent from child. // CAUSES AN INFINITE LOOP WHEN UPDATED. Possibly due to states relying on states. 
    
    // Tried using forward refs before on genericinput, didn't seem to get it to work. Will have to attempt it again. 

    // const searchRef = useRef(null);
    
    // const getSearchKey = ((): string => {
    //     if (searchRef.current != null && typeof searchRef.current !== 'function') {
    //         return searchRef.current.val
    //     }
    //     else return('')
    //     })

    let getState = props.getstate;
    
    
    // useEffect(()=>{
    //     console.log(searchRef.current!.val);
    //     getState({
    //             theme: allThemes[0],
    //             searchkey: getSearchKey(),        
    //             orderby: ''
    //         })
    // }, [searchRef])

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
                    // ref={searchRef} // Use Forward refs here 
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
                            <option value={theme.toLowerCase()} key={theme.toLowerCase()}> 
                                {theme}
                            </option>
                        </>
                    )
                })}    
            </select>
            {showOrder? <p> Show Order</p> : <p> Order not shown </p>}

            <p> Search and Filter </p>
        </>

    )
}


// -> topic, searchkey, order -- input 
// filtering  -- processing -- context?
// output  -- output

// search & filter -- input, processing, output  
// creating post 

// 

