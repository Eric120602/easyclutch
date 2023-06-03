import handler from "./handler"



export const getStudentall=()=>{
    return handler("GET","/")
}

export const getStudentexs=()=>{
    return handler("GET","/")
}

export const getFeedetails=()=>{
    return handler("POST","/packages/type/payment/notify")
}


