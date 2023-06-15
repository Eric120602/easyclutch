import handler from "./handler"

export const getStudentall = () => {
    return handler("GET", "/")
}

export const getStudentexs = () => {
    return handler("GET", "/trainees/bookings")
}

export const getFeedetails = () => {
    return handler("GET", "/packages/payments")
}

