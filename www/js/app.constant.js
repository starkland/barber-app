(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'http://localhost:3000',
    'API_URL_PROD': 'https://minhaagenda-api.herokuapp.com',
    'FACEBOOK': {
      'APP_ID': '628943173897687'
    },
    'GOOGLE': {
      'API_KEY': 'AIzaSyAZoLCaQffdxP_HbL8ELJIqDIXfYpRb8kk',
      'DOCS': 'https://people.googleapis.com/$discovery/rest?version=v1',
      'CLIENT_ID': '654704351091-v9lptj1dp5nnoefnjfr1b123hmnu6h2b.apps.googleusercontent.com',
    }
  };

  angular
  .module('Core.constant', [])
  .constant('ApiConfig', ApiConfig);

})();
