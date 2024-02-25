/*eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect} from "react"
import { FormContext } from "../contexts/FormContext"


export default function SelectYear({children}:{children:React.ReactNode}) {
    const { setValueIdYear,valueIdYear } = useContext(FormContext)
    useEffect(() => {
        setValueIdYear(valueIdYear)
      
    },[valueIdYear])
    return (
        <>
            <select className='bg-slate-100 w-10/12 p-3 font-bold text-neutral-600 rounded-xl'
                name="sele"
                id=""
                value={valueIdYear}
                onChange={currentValue => setValueIdYear(currentValue.target.value)}>
                {children}
            </select>
        
        </>
    )
}