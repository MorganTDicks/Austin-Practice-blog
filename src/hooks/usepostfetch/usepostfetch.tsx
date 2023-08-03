import userContext from "@/Context/datawrappers/userwrapper";
import { PostData } from "@/Declarations/DBTypes";
import { Post } from "@/Declarations/PostTypes";
import { User } from "@/Declarations/UserTypes";
import DataInitialiser from "@/Utilities/dataiinitialiser";
import { postToPostData, postdataToPost } from "@/Utilities/datatools/dataitools";
import { useContext, useEffect, useReducer } from "react";

type reducerType = {type: string, value: Post[]};

const reducerChanger = (stateVal: reducerType, action: reducerType): reducerType => {
    const { type, value } = action;
    let preVal: Post[] = stateVal.value; 

    // value can be an array of Post in the case of initialise, but must be a single Post in all other cases. 

    switch(type){
        case 'initialise':
            return(intitStuff());
        case 'add':
            return(addStuff());
        case 'replace':
            return(replaceStuff());
        case 'remove':
            return(removeStuff());
        default:   
            console.log('defaulting. The program should not normally do this.')  
            break;
    }
    return(stateVal)

    function intitStuff(): reducerType {
        // newVal is Post[]
        let newVal: Post[] = value;
        
        return({
            ...stateVal,
            value: newVal
        })
    }

    function addStuff(): reducerType {
        // newVal is Post
        let newVal: Post = value[0];

        // TODO: convert to server-side type & update API. For now, just logs the converted data to the console and saves to state. 
        console.log(postToPostData([...preVal, newVal]))
        
        return({
            ...stateVal,
            value: [...preVal, newVal]
        })
    }

    function replaceStuff(): reducerType {
        // newVal is Post
        let newVal: Post = value[0];

        // Replacing the old value with the new value
        preVal.splice(preVal.indexOf(newVal), 1, newVal); 
        
        // TODO: convert to server-side type & update API. For now, just logs the converted data to the console and saves to state. 
        console.log(postToPostData(preVal))

        return({
            ...stateVal,
            value: [...preVal, newVal]
        })
    }

    function removeStuff(): reducerType {
        // newVal is Post
        let newVal: Post = value[0];

        // Removing the value
        preVal.splice(preVal.indexOf(newVal), 1); 
        
        // TODO: convert to server-side type & update API. For now, just logs the converted data to the console and saves to state. 
        console.log(postToPostData(preVal))

        return({
            ...stateVal,
            value: [...preVal, newVal]
        })
    }
}


export default function usePostFetch(){
    const arrUsers: User[] = useContext(userContext).value;
    const [convertedData, dispachConvertedData] = useReducer(reducerChanger, {
        type: '',
        value: [DataInitialiser.initialPost]
    });

    // Fetching the Posts from api/posts
    useEffect(()=>{
        fetch("/api/posts").then(async res => await res.json()).then(setData);  
    }, [])
    
    // overwrite the current data with what was pulled from the db
    function setData(data: PostData[]){
        dispachConvertedData({
            type: 'initialise', 
            value: postdataToPost(arrUsers, data, 'approved') 
            }) 
    }
        
    // Changer function to allow external updates to Posts state via context
    function changer(newVal: Post, type?: string){
        dispachConvertedData({
            type: (type? type : 'add'), 
            value: [newVal]
        })    
    }
    
    return({
        value: convertedData!.value,
        changer: changer
    })
}