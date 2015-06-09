(function () {

  /**
   * Configure authomator
   */
  function configureAuthomator(authomatorProvider) {
    authomatorProvider.setOptions({
      authomatorUrl: 'https://use-your-authomator-url-here'
    });
  }

  // Inject dependencies;
  configureAuthomator.$inject = ['authomatorProvider'];

  angular
    .module('app')
    .config(configureAuthomator);

})();
