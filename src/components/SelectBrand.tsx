/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect} from "react"
import { FormContext } from "../contexts/FormContext"


export default function SelectBrand({children}:{children:React.ReactNode}) {
    const { setValueIdBrand,valueIdBrand } = useContext(FormContext)

    useEffect(() => {
      setValueIdBrand(valueIdBrand)
      
      
    },[valueIdBrand])
    return (
        <>
            <select className='bg-slate-100 w-10/12 p-3 font-bold text-neutral-600'
                name="sele"
                id=""
                value={valueIdBrand}
                onChange={currentValue => setValueIdBrand(currentValue.target.value)}>
                {children}
            </select>
        
        </>
    )
}