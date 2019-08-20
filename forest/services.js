const Liana = require('forest-express-mongoose');


Liana.collection('services', {
    fields: [{
        field: 'longlat',
        type: 'String',
        get: (service) => {
            return service.geo.coordinates.join(",")
        },
        set: (service, longlat) => {
            let coordinates = longlat.replace(/\s/g, '').split(",")
            service.geo = {
                type: "Point",
                coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
            }
            return service
        }
    }]
  })