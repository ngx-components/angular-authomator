(function (angular) {

  /**
   * Register interceptors with http provider
   */
  function registerHttpInterceptors($httpProvider) {
    $httpProvider.interceptors.push(getHttpAuthenticationInterceptor);
  }

  // Inject dependencies;
  registerHttpInterceptors.$inject = ['$httpProvider'];

  /**
   * Get authentication interceptor
   */
  function getHttpAuthenticationInterceptor(httpAuthenticationInterceptor){
    return httpAuthenticationInterceptor;
  }

  // Inject dependencies
  getHttpAuthenticationInterceptor.$inject = ['httpAuthenticationInterceptor'];

  angular
    .module('app')
    .config(registerHttpInterceptors);

})(angular);
