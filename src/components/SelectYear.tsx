/*eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect} from "react"
import { FormContext } from "../contexts/FormContext"
import { motion } from "framer-motion"


export default function SelectYear({children}:{children:React.ReactNode}) {
    const { setValueIdYear,valueIdYear } = useContext(FormContext)
    useEffect(() => {
        setValueIdYear(valueIdYear)
      
    },[valueIdYear])
    return (
        <>
            <motion.select 
             initial={{width: '0%'}}
             animate={{width:"80%"}}
             transition={{duration:0.3}}
            className='bg-slate-100 w-10/12 p-3 font-bold text-neutral-600 rounded-xl'
                name="sele"
                id=""
                value={valueIdYear}
                onChange={currentValue => setValueIdYear(currentValue.target.value)}>
                {children}
            </motion.select>
        
        </>
    )
}