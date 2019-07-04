const key = "services"

// Return a truthy/falsy value for whether favouriting is possible in the given browser
export const favouritingEnabled = () => {
    return window.localStorage
}

// Return a list of everything, or null if uninitialised
export const listFavourites = () => {
    return JSON.parse(window.localStorage.getItem(key))
}

// Check whether the given service is saved
export const isFavourited = (assetId) => {
    let services = listFavourites()
    if(services){
        let matchingServices = services.filter((service)=>{
            if(service.assetId === assetId){
                return service
            }
        })
        console.log(matchingServices.length > 0)
        return matchingServices.length > 0
    }
}
  
// Save a given service object, and return the new list
export const addFavourite = (service) => {
    let services = listFavourites()
    if(!services){
        services = new Array()
    }
    services.push(service)
    window.localStorage.setItem(key, JSON.stringify(services))
    return listFavourites()
}

// Find the service matching a given assetID, remove it and return the remaining list
// export const removeFavourite = (assetId) => {
//     const services = listFavourites()
//     if(services){
//         let remainingServices = services.filter((service)=>{
//             if(service.assetId !== assetId){
//                 return service
//             }
//         })

//         // if(remainingServices.length > 0){
//             window.localStorage.setItem(key, JSON.stringify(remainingServices))
//             // return window.localStorage
//             // return listFavourites()
//         // }
//         // return false
//     }
//     // return false
// } 