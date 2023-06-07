import handler from "./handler"

export const registerUser3 = (body) => {
    const url = `/packages`
    return handler("GET", url, body)
}

export const registerUser1 = (body) => {
    const url = `/packages/:id`
    return handler("PUT", url, body)
}

export const verifyPackage = (body) => {
    console.log(body.id)
    const url = `/packages/${body.id}/verify`
    return handler("POST", url, body)
}

export const registerUser2 = (body) => {
    const url = `/packages/type/payment/notify`
    return handler("POST", url, body)
}

export const registerUser = (body) => {
    const url = `/packages/:packageId/sessions/schedule`
    return handler("POST", url, body)
}

// export const  = (body) => {
//     const url = `/packages/type/payment/notify`
//     return handler("POST", url,body)
// }