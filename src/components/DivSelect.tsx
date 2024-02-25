import { useContext, useLayoutEffect, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import SelectBrand from "./SelectBrand";
import SelectModel from "./SelectModel";
import { VehicleType } from "../types/VehicleType";
import OptionSelect from "./OptionSelect";
import SelectYear from "./SelectYear";


export default function DivSelect() {
    const { brandVehicle, modelVehicle, loadingBrand, radioValue, 
    valueIdBrand,loadingModel,valueIdModel,yearVehicle,loadingYear} = useContext(FormContext)
    const [car, setCar] = useState<VehicleType[]>([])
    const [modelCar, setModelCar] = useState<VehicleType[]>([])
    const [yearCar, setYearCar] = useState<VehicleType[]>([])
    const loadingText = 'Carregando...'
    useLayoutEffect(() => {
        if (modelVehicle.length > 0) {
            setModelCar(modelVehicle)
        }

    }, [modelVehicle])

    useLayoutEffect(() => {
        if (brandVehicle.length > 0) {
            setCar(brandVehicle)
        }

    }, [brandVehicle])

    useLayoutEffect(() => {
      if(yearVehicle.length > 0){
        setYearCar(yearVehicle)
      }
    },[yearVehicle])

    return (
        <>
           {
    radioValue === 'car' &&
    <SelectBrand  >
        <OptionSelect key={'default'} 
        disable={true} 
        value="default" 
        textContent={loadingBrand ? "Selecione a marca do carro" : loadingText}/>
        {
            car.map(vehicle => (
                <OptionSelect key={vehicle.codigo} 
                disable={false} 
                value={vehicle.codigo} 
                textContent={loadingBrand ? vehicle.nome : loadingText}/>  
                )   
            )
        }
    </SelectBrand>
}
{
    radioValue === 'car' && valueIdBrand != 'default' &&
    <SelectModel>
        <OptionSelect key={'default'} 
        disable={true} 
        value="default" 
        textContent={loadingModel ? "Selecione o modelo do carro" : loadingText}/>
        {
            modelCar.map(vehicle => (
                <OptionSelect key={vehicle.codigo} 
                disable={false} 
                value={vehicle.codigo} 
                textContent={loadingModel ? vehicle.nome : loadingText}/> )
            )
        }
    </SelectModel>
}
{
    radioValue === 'car' && valueIdModel != 'default' &&
        <SelectYear>
            <OptionSelect key={'default'} 
            disable={true} 
            value="default" 
            textContent={loadingYear ? "Selecione o ano do carro" : loadingText}/>
            {
                yearCar.map(vehicle => (
                    <OptionSelect key={vehicle.codigo} 
                    disable={false} 
                    value={vehicle.codigo} 
                    textContent={loadingYear ? vehicle.nome : loadingText}/> )
                )
            }
        </SelectYear>
    

}
{
    radioValue === 'motocycle' &&
    <SelectBrand >
        <OptionSelect key={'default'} 
        disable={true} 
        value="default" 
        textContent={loadingBrand ? "Selecione a marca da moto" : loadingText}/>
        {
            car.map(vehicle => (
                <OptionSelect key={vehicle.codigo} 
                disable={false} 
                value={vehicle.codigo} 
                textContent={loadingBrand ? vehicle.nome : loadingText}/>)
            )
        }
    </SelectBrand>
}
{
    radioValue === 'motocycle' && valueIdBrand != 'default' &&
    <SelectModel>
        <OptionSelect key={'default'} 
        disable={true} 
        value="default" 
        textContent={loadingModel ? "Selecione o modelo da moto" : loadingText}/>
        {
            modelCar.map(vehicle => (
                <OptionSelect key={vehicle.codigo} 
                disable={false} 
                value={vehicle.codigo} 
                textContent={loadingModel ? vehicle.nome : loadingText}/>)
            )
        }
    </SelectModel>
}
{
    radioValue === 'motocycle' && valueIdModel != 'default' &&
        <SelectYear>
            <OptionSelect key={'default'} 
            disable={true} value="default" 
            textContent={loadingYear ? "Selecione o ano da moto" : loadingText}/>
            {
                yearCar.map(vehicle => (
                    <OptionSelect key={vehicle.codigo} 
                    disable={false} value={vehicle.codigo} 
                    textContent={loadingYear ? vehicle.nome : loadingText}/> )
                )
            }
        </SelectYear>
}
        </>
    )
}
