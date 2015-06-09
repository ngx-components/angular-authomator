(function (angular) {

  function AuthService($log, $location, $window, authomator, session){

    this.redirectToLoginPage = function redirectToLoginPage(){
      var current = $location.absUrl();
      $window.location = authomator.getLoginUrl() + '?return=' + current;
    };

    this.isLoggedIn = function isLoggedIn(){
      return session.getIdentity() !== null;
    };

    this.logIn = function(){
      this.redirectToLoginPage();
    };

    this.logOut = function(){
      session.destroy();
      authomator.removeAccessToken();
      authomator.removeIdentityToken();
      authomator.removeRefreshToken();
      this.redirectToLoginPage();
    };

  }

  // Inject dependencies
  AuthService.$inject = ['$log', '$location', '$window', 'authomator', 'session'];

  // Export
  angular
    .module('app')
    .service('auth', AuthService);

})(angular);
