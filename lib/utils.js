export const prettyDays = (rawDays) => {
    if (rawDays.length > 0) {
        if(rawDays.length === 7) return "Available every day"
        let prettyDays = rawDays.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + "s")
        return "Available on " + prettyDays.join(", ")
    }
}

export const truncate = (str, noWords) => {
    if(str && (noWords > 1)){
        if(str.split(" ").length > noWords){
            return str.split(" ").splice(0,noWords).join(" ") + "..."
        } else {
            return str
        }
    }
}

export const prettyDistance = (miles)=>{
    if(miles !== undefined){
        let roundMiles = Math.round(miles)
        if(roundMiles < 1 || roundMiles == 0) return "Less than a mile away"
        if(roundMiles === 1) return "About a mile away"
        return `About ${roundMiles} miles away`
    }
}