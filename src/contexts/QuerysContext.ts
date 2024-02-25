/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, createContext } from "react";
import { fipeType } from "../types/Fipetype";
type QuerysContextType = {
    setDataFipeVehicle:React.Dispatch<SetStateAction<fipeType[]>>,
    setFipeLoading:React.Dispatch<SetStateAction<boolean>>
    
}
export const QuerysContext = createContext<QuerysContextType>(null)