
type CardProps ={
    text:string,
    svg:string,
}
export default function Card({text,svg}:CardProps){
    return(
    <div className='flex flex-col items-center m-auto justify-center w-full lg:w-[70%] lg:h-60 xl:h-96 text-center bg-cyan-600 text-slate-50 p-5 rounded-3xl'>
            <h4 className="font-bold text-xs md:text-lg lg:text-3xl xl:6xl mb-5">{text}</h4>
            <div className="border-8 rounded-3xl p-5">
                <img className='w-10 h-[76px] lg:w-20' src={svg} alt="" />
            </div>
            
        </div>
    )
}