const Liana = require('forest-express-mongoose');


Liana.collection('Service', {
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
    }],
    actions: [{
        name: 'Import services',
        endpoint: '/forest/service/actions/import-services',
        type: 'global',
        fields: [{
          field: 'CSV file',
          description: 'A semicolon separated values file stores tabular data (numbers and text) in plain text',
          type: 'File',
          isRequired: true
        }]
      }],
  })