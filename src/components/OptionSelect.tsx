
type OptionSelectType = {
    value:string,
    key?:string,
    textContent:string
    disable:boolean
}
export default function OptionSelect({value,textContent,disable}:OptionSelectType){   
    
    return(
        <option className=" bg-slate-300 rounded font-bold border-y-blue-900" value={value} disabled={disable} >{textContent}</option>
    )
}