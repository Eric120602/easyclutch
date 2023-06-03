import handler from "./handler"

export const getVehicles=()=>{
    return handler("GET","/vehicles")
}

export const getStudentall=()=>{
    return handler("GET","/")
}

export const getStudentexs=()=>{
    return handler("GET","/")
}

