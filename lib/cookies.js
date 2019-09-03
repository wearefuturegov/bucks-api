const getCookie = (cname) => {
    let name = cname + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(";")
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

export const cookieWarningSeen = () => {
    let key = getCookie("cookieWarningSeen")
    if (key !== "") return true
    return false
}

export const setSeenCookie = () => {
    const d = new Date()
    // Expire one year from now
    d.setTime(d.getTime() + (365*24*60*60*1000))
    const expires = "expires="+ d.toUTCString()
    document.cookie = "cookieWarningSeen=true;" + expires + ";path=/"
}