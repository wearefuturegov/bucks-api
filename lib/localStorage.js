const key = "services"

// Return a list of everything
export const listFavourites = () => {
    return JSON.parse(localStorage.getItem(key))
}
  
// Save a given service object, and return the new lisrt
export const addFavourite = (service) => {
    let services = listFavourites()
    if(!services.length){
        services = new Array()
    }
    services.push(service)
    localStorage.setItem(key, JSON.stringify(services))
    return listFavourites()
}

// Find the service matching a given assetID, remove it and return the remaining list
export const removeFavourite = (assetId) => {
    const services = listFavourites()
    if(services.length){
        let remainingServices = services.filter((service)=>{
            if(service.assetId !== assetId){
                return service
            }
        })
        if(remainingServices.length > 0){
            localStorage.setItem(key, JSON.stringify(remainingServices))
            return listFavourites()
        }
        return false
    }
    return false
} 