
export default async function getModelVehicle(id:string,radioValue:string){
    try{
        if(radioValue === 'car'){
                const res = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`)
                const data = await res.json()
        
                return data
            }
        
            if(radioValue === 'motocycle'){
                const res = await fetch(`https://parallelum.com.br/fipe/api/v1/motos/marcas/${id}/modelos`)
                const data = await res.json()
                return data
            }
    }catch{(err:string) => alert(`${err}, Algo de errado aconteceu`)}
 
}