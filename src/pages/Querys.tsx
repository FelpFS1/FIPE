import Header from "../components/Header";
import Form from "../components/Form";
import { QuerysContext } from "../contexts/QuerysContext";
import {  useState } from "react";
import { fipeType } from "../types/Fipetype";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


export default function Querys(){
    const [dataFipeVehicle, setDataFipeVehicle] = useState<fipeType[]>([])

    const [fipeLoading, setFipeLoading] = useState(false)

    return(
        <QuerysContext.Provider value={{setDataFipeVehicle,setFipeLoading}}>
            <Header/>
            <motion.main 
            initial={{x: -200}}
            animate={{x:0}}

            
            className="w-screen">
                <section>
                    <div className="w-4/6 text-center m-auto ">
                        <h2 className="font-bold mb-5 lg:text-3xl lg:mb-10">Selecione qual tipo de veiculo você deseja consultar</h2>
                    </div>
                    <div>
                        <Form />
                    </div>
                </section>
                {fipeLoading &&
                    (<motion.section 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:2}}
                    className=" my-5 flex justify-center">
                        <div className="w-4/5 bg-slate-100 p-5 text-sm sm:text-lg text-left font-bold rounded-2xl">
                        <h3 className="text-center mb-2">Dados do seu veiculo</h3>
                        {
                            dataFipeVehicle.map(dataVehicle => 
                                <ul key={dataVehicle.Modelo}>
                                <li>Valor: {dataVehicle.Valor} </li>
                                <li>Marca: {dataVehicle.Marca} </li>
                                <li>Modelo: {dataVehicle.Modelo} </li>
                                <li>Ano: {dataVehicle.AnoModelo}</li>
                                <li>Código Fipe: {dataVehicle.CodigoFipe} </li>
                                <li>Mês de referência: {dataVehicle.MesReferencia}</li>
                            </ul>
                            )
                        }
                                
                        </div>
                    </motion.section>)
                }
                
            </motion.main>
            <Footer/>
        </QuerysContext.Provider>

    )
}