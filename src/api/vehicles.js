import handler from "./handler"

export const getVehicles=()=>{
    return handler("GET","/vehicles")
}