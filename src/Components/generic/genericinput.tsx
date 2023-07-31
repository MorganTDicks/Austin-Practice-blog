import type { InputStuffs } from "@/Declarations/OtherTypes"

export default function GenericInput(props: any){
    let iStuffs: InputStuffs = {
    label: props.label,
    type: props.type,
    value: props.value,
    onChange: props.onChange
    };

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
            /> 
        </div>
    )
}