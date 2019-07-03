export const listFavourites = () => {
    return JSON.parse(localStorage.getItem("services"))
}
  
export const addFavourite = (service) => {
    let services = listFavourites()
    if(!services.length){
        services = new Array()
    }
    services.push(service)
    localStorage.setItem("services", JSON.stringify(services))
    return listFavourites()
}
  
export const removeFavourite = (assetId) => {
    let services = listFavourites()
    if(services.length){
        let remainingServices = services.filter((service)=>{
            if(service.assetId !== assetId){
                return service
            }
        })
        if(remainingServices.length > 0){
            localStorage.setItem("services", JSON.stringify(remainingServices))
            return listFavourites()
        }
        return false
    }
    return false
} 