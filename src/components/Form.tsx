/* eslint-disable react-hooks/exhaustive-deps */
import { SetStateAction, useContext, useEffect, useState } from 'react'
import carSvg from '../assets/car.svg'

import motocycleSvg from '../assets/motocycle.svg'

import getBrandCar from '../helpers/getBrandVehicle'

import getModelVehicle from '../helpers/getModelVehicle'

import getYearVehicle from '../helpers/getYearVehicle'
import getDataVehicle from '../helpers/getDataVehicle'
import { FormContext } from '../contexts/FormContext'

import DivSelect from './DivSelect'

import { VehicleType } from '../types/VehicleType'
import { QuerysContext } from '../contexts/QuerysContext'
import { motion } from 'framer-motion'

export default function Form() {
    const { setDataFipeVehicle,setFipeLoading } = useContext(QuerysContext)


    const [loadingBrand, setLoadingBrand] = useState(false)
    const [loadingModel, setLoadingModel] = useState(false)
    const [loadingYear, setLoadingYear] = useState(false)
    const [radioValue, setRadioValue] = useState('')
    const [valueIdBrand, setValueIdBrand] = useState('default')
    const [valueIdModel, setValueIdModel] = useState('default')
    const [valueIdYear, setValueIdYear] = useState('default')
    const [brandVehicle, setBrandVehicle] = useState<VehicleType[]>([])
    const [modelVehicle, setModelVehicle] = useState<VehicleType[]>([])
    const [yearVehicle,setYearVehicle] = useState<VehicleType[]>([])

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setRadioValue(e.target.value)
    }

    async function getBrandData() { 
        const data = await getBrandCar(radioValue)
        setBrandVehicle(data)
        setLoadingBrand(true)
    }

    async function getModelData() { 
        const data = await getModelVehicle(valueIdBrand, radioValue)
        setModelVehicle(data.modelos)
        setLoadingModel(true)
    }
    async function getYearData() {
        const data:VehicleType[] = await getYearVehicle(radioValue,valueIdBrand,valueIdModel)
        const dataFilter = data.filter(data => data.codigo != "32000-1") 
        setYearVehicle(dataFilter)
        setLoadingYear(true)
    }

    
    async function getFipeVehicle(e:{ preventDefault: ()=> void } ) {
        e.preventDefault()
        const data = await getDataVehicle(radioValue,valueIdBrand,valueIdModel,valueIdYear)
        setDataFipeVehicle([data])
        setFipeLoading(true)
        
    }

    useEffect(() => {
        if (radioValue != '') {
            getBrandData()
        }
       
    }, [radioValue])

    useEffect(() => {
        if (valueIdBrand != "default") {
            getModelData()
        }
    }, [valueIdBrand])

    useEffect(() => {
      if(valueIdModel != "default"){
        getYearData()
      }
    },[valueIdModel])

    return (
        <FormContext.Provider value={
        {   setValueIdBrand, valueIdBrand, loadingBrand, 
            loadingModel,loadingYear,brandVehicle, modelVehicle, 
            radioValue, valueIdModel, setValueIdModel,
            setValueIdYear,valueIdYear,yearVehicle }}>
            <form onSubmit={getFipeVehicle}>
                <div className=" w-[100vw] sm:w-[50vw] justify-evenly flex sm:justify-between m-auto lg:justify-around">
                    <div className="flex flex-row-reverse gap-2">
                        <label htmlFor="car"><img className="w-10 lg:w-14" src={carSvg} /></label>
                        <input type="radio"
                            name="vehicleSelection"
                            id="car"
                            value='car'
                            checked={radioValue === 'car'}
                            onChange={handleChange
                            } />

                    </div>
                    <div className="flex flex-row-reverse gap-2">
                        <label htmlFor="motocycle"><img className="w-12 lg:w-16" src={motocycleSvg} alt="" /></label>
                        <input type="radio"
                            name="vehicleSelection"
                            id="motocycle"
                            value='motocycle'
                            checked={radioValue === 'motocycle'}
                            onChange={handleChange
                            }
                        />
                    </div>

                </div>
                <div className='flex flex-col items-center gap-5 mt-5'>
                    <DivSelect />
                </div>
                { valueIdYear!= 'default' &&
                    <div className='w-screen text-center mt-6'>
                        <motion.button 
                        initial={{x:-200}}
                        animate={{x:0}}
                        transition={{duration:0.8}}
                        type="submit" className='uppercase m-auto bg-cyan-600 font-bold text-white py-2 px-4 rounded-br-3xl rounded-tl-3xl rounded-tr-xl rounded-bl-xl'>Consultar</motion.button>

                    </div>
                }
            </form>
        </FormContext.Provider>
    )
}