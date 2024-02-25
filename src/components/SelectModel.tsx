import { useContext, useEffect } from "react"
import { FormContext } from "../contexts/FormContext"

export default function SelectModel({children}:{children:React.ReactNode}) {
    const { setValueIdModel,valueIdModel } = useContext(FormContext)

    useEffect(() => {
        setValueIdModel(valueIdModel)

        
    },[setValueIdModel, valueIdModel])
    return (
        <>
            <select className='bg-slate-100 w-10/12 p-3 font-bold text-neutral-600 rounded-xl'
                name="model"
                id=""
                value={valueIdModel}
                onChange={currentValue => setValueIdModel(currentValue.target.value)}>
                {children}
            </select>
        
        </>
    )
}