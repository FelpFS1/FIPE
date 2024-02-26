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
                 initial={{x: -200}}
                 animate={{x:0}}
                 >
                    <section className="w-screen p-3 text-center ">
                    <h2 className="font-semibold text-3xl lg:text-4xl">Está procurando um lugar para consultar a <span className="text-red-600">FIPE</span> do seu veículo?</h2>
                    </section>
                    <section className="grid grid-cols-2 gap-5 p-3 mt-12 m-auto">
                        <Card text={"Custo zero"} svg={money}/>
                        <Card text={"Fipe atualizada"} svg={actual}/>
                    </section>
                    <div className="w-scren my-7 text-center">
                        <h2 className="text-4xl font-bold">Encontrou o lugar certo!</h2>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/querys'}><button className="bg-cyan-600 py-4 px-10 sm:px-20 mb-10 font-bold text-white uppercase rounded-xl hover:text-black hover:opacity-85">Consulte agora</button></Link>
                    </div>
                </motion.main>
                <Footer/>
            
            </>
    )
}