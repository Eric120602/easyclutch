import handler from "./handler"

export const addLeave= (body) => {
    return handler("POST", `/leaves`, body)
}

export const getLeaves = () => {
    return handler("GET", `/leaves`)
}

export const getSchedule = () => {
    return handler("GET", "/schedules/sessions")
}