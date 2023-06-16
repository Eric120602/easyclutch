import handler from "./handler"


export const getStudentexs = () => {
    return handler("GET", "/trainees/bookings")
}

export const getFeedetails = () => {
    return handler("GET", "/packages/payments")
}

export const trainerLogin = (body) => {
    const url = `/trainers/login`
    return handler("POST", url ,body)
}

export const registerTrainer = (body) => {
    console.log(body)
    const url = `/trainers/register`
    return handler("POST", url, body)
}

// export const verifyOtp = (body) => {
//     const url = `/trainees/register/verify`
//     return handler("POST", url, body)
// }