export const prettyDays = (rawDays) => {
    if (rawDays.length > 0) {
        if(rawDays.length === 7) return "Available every day"
        let prettyDays = rawDays.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + "s")
        return "Available on " + prettyDays.join(", ")
    } else {
        return false
    }
}