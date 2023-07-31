import type { InputStuffs } from "@/Declarations/OtherTypes"
// import React, { useImperativeHandle, useRef } from "react";

//const GenericInput = React.forwardRef((props: any, ref) => {
export default function GenericInput(props: any){
    let iStuffs: InputStuffs = {
    label: props.label,
    type: props.type,
    value: props.value,
    onChange: props.onChange
    };

    // const genericRef = useRef<HTMLInputElement>(null);
    // useImperativeHandle(ref, ()=>{
    //     return {
    //         val: (genericRef.current? genericRef.current.value : '')
    //     }
    // })


    // May result in error if iStuffs.value contains spaces. 

    return(
        <div key={iStuffs.label}>
            <label htmlFor={iStuffs.label}> {iStuffs.label} </label>
            <input 
                id={iStuffs.label} 
                type={iStuffs.type} 
                onChange={iStuffs.onChange} 
                value={iStuffs.value} 
                style={{color: "black"}} 
                // ref={genericRef}
            /> 
        </div>
    )
}
// })

// export default GenericInput;