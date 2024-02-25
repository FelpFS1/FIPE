/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, createContext } from "react";
import { VehicleType } from "../types/VehicleType";
type FormContextType = {
    setValueIdBrand:React.Dispatch<SetStateAction<string>>,
    radioValue:string,
    loadingBrand:boolean,
    loadingModel:boolean,
    loadingYear:boolean,
    brandVehicle:VehicleType[],
    modelVehicle:VehicleType[],
    yearVehicle:VehicleType[],
    valueIdBrand:string,
    valueIdModel:string,
    valueIdYear:string,
    setValueIdModel:React.Dispatch<SetStateAction<string>>,
    setValueIdYear:React.Dispatch<SetStateAction<string>>
}
export const FormContext = createContext<FormContextType>()