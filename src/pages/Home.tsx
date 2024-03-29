import Card from "../components/Card";
import Header from "../components/Header";
import money from '../assets/money.svg';
import actual from "../assets/actual.svg"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


export default function Home(){
    return (
            <>
                <Header/>
                <motion.main 
                 transition={{duration:1}}
                 exit={{x:window.innerWidth}}
                 >
                    <section className="w-screen p-3 text-center ">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-3xl">Está procurando um lugar para consultar a <span className="text-red-600">FIPE</span> do seu veículo?</h2>
                    </section>
                    <section className="grid grid-cols-2 gap-5 p-3 m-auto">
                        <Card text={"Custo zero"} svg={money}/>
                        <Card text={"Fipe atualizada"} svg={actual}/>
                    </section>
                    <div className="w-scren my-2 xl:my-7 text-center">
                        <h2 className="text-2xl lg:text3xl font-bold">Encontrou o lugar certo!</h2>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/querys'}><button className="bg-cyan-600 py-4 px-10 sm:px-20 mb-10 font-bold text-white uppercase rounded-xl hover:text-black hover:opacity-85">Consulte agora</button></Link>
                    </div>
                </motion.main>
                <Footer/>
            
            </>
    )
}