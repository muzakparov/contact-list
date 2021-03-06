/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'contact-list',
    environment: environment,
	contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: {
    apiKey: 'xyz',
    authDomain: 'ember-project-75004.firebaseapp.com',
    databaseURL: 'https://ember-project-75004.firebaseio.com',
    storageBucket: 'ember-project-75004.appspot.com',
  },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
		 EXTEND_PROTOTYPES: {
      Date: false,
    }
    
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
