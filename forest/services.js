const Liana = require('forest-express-mongoose');

Liana.collection('services', {
  fields: [{
    field: 'Keywords',
    type: 'String',
    get: (service) => {
      return service.keywords.join(",");
    },
    set: (service, keywords_string) => {
      let keywords_array = keywords_string.split(',');
      service.keywords = keywords_array
      return service;
    }
  }]
});