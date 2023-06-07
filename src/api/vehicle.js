import handler from "./handler"

export const getVehicles = () => {
    return handler("GET", "/vehicles")
}

export const removeVehicles = (body) => {
    const url = `/vehicles/${body.id}`

    return handler("DELETE", url, body)
}

export const insertVehicles = (body) => {
    const url = `/vehicles`
    console.log(body, "hand")
    return handler("POST", url, body)
}

