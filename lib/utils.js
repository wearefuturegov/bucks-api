export const prettyDays = rawDays => {
    if (rawDays.length > 0) {
        if(rawDays.length === 7) return "On every day"
        let prettyDays = rawDays.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + "s")
        return "On " + prettyDays.join(", ")
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

export const prettyDistance = miles => {
    if(miles !== undefined){
        let roundMiles = Math.round(miles)
        if(roundMiles < 1 || roundMiles == 0) return "Less than a mile away"
        if(roundMiles === 1) return "About a mile away"
        return `About ${roundMiles} miles away`
    }
}

export const prettyList = array => {
    if(array){
        return array.map(el => el.charAt(0).toUpperCase() + el.slice(1))
    }
}

export const prettyFeatures = service => {

    console.log(service.days)

    let array = []
    if(service.promoted) array.push("Recommended")
    if(service.distance) array.push(prettyDistance(service.distance))
    if(service.accessibility.includes("building wheelchair access")) array.push("Wheelchair accessible")
    if(service.days.length === 7) array.push("On every day")

    return array.join("  ·  ")
}

export default null