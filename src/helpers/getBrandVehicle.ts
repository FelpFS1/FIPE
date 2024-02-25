/* eslint-disable @typescript-eslint/no-explicit-any */



export default async function getBrandVehicle(radioValue:string): Promise<any> {
    try{
        if(radioValue === 'car'){
            const res = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            const data = await res.json()
            
            return data
        }
    
        if(radioValue === 'motocycle'){
            const res = await fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas')
            const data = await res.json()
            return data
        }

    }catch{(err:string) => alert(`${err}, Algo de errado aconteceu`)}
 
}