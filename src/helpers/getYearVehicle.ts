export default async function getYearVehicle(radioValue:string,id:string,idModel:string){
    try{
        if(radioValue === 'car'){
            const res = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos/${idModel}/anos`)
            const data = await res.json()
            return data
        }
    
        if(radioValue === 'motocycle'){
            const res = await fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${id}/modelos/${idModel}/anos`)
            const data = await res.json()
            return data
        }
    }catch{(err:string) => alert(`${err}, Algo de errado aconteceu`)}
}