import logo from '../assets/fipe.png'


export default function Header(){
    return(
        <header className='w-screen p-2  lg:h-28' >
            <div className='w-40 m-auto lg:w-60'>
                <img src={logo} alt="logo fipe"/>
            </div>
        </header>
    )
}