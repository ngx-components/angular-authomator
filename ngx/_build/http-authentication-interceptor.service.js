(function (angular) {

  /**
   * Configure authomator
   */
  function httpAuthenticationInterceptorFactory($q, $log, auth) {

    return {
      'request': function (config) {
        return config;
      },
      'response': function (response) {
        return response;
      },
      'responseError': function (rejection) {
        if (rejection.status === 401) {
          $log.debug('Intercepted status 401:' + rejection.config.method + ' ' + rejection.config.url);
          auth.redirectToLoginPage();
          return $q.reject(rejection);
        }
        return $q.reject(rejection);
      }
    };

  }

  // Inject dependencies;
  httpAuthenticationInterceptorFactory.$inject = ['$q', '$log', 'auth'];

  angular
    .module('app')
    .factory('httpAuthenticationInterceptor', httpAuthenticationInterceptorFactory);

})(angular);
