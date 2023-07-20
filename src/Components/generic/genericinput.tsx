import type { InputStuffs } from "@/Declarations/OtherTypes"

export default function GenericInput(props: any){
    let iStuffs: InputStuffs = {
    label: props.label,
    type: props.type,
    value: props.value,
    onChange: props.onChange
    };

    return(
        <>
            <label> {iStuffs.label} </label>
            <input type={iStuffs.type} onChange={iStuffs.onChange} value={iStuffs.value}/> 
        </>
    )
}