import fetch from 'isomorphic-unfetch'

const geocode = async (rawLocation) => {
    const res = await fetch('/api/geocode', {
        method: 'post',    
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ location: rawLocation })
    })
    const data = await res.json()
    if(data.status === "OK"){
        return {
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
            formattedLocation: data.results[0].formatted_address
        }
    }
}

export default geocode