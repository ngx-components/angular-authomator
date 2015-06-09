(function (angular) {

  /**
   * Check for required access when application bootstraps
   *
   * @param auth
   * @param authomator
   */
  function checkAccessDuringApplicationBootstrap(auth, authomator){

    if(auth.isLoggedIn()){
      return;
    }

    if(!authomator.getAccessToken()){
      auth.redirectToLoginPage();
      throw new Error('No access token, redirect to login');
    }

    if(!authomator.getIdentityToken()){
      auth.redirectToLoginPage();
      throw new Error('No identity token, redirect to login');
    }

    if(!authomator.getRefreshToken()){
      auth.redirectToLoginPage();
      throw new Error('No refresh token, redirect to login');
    }

  }

  // Inject dependencies
  checkAccessDuringApplicationBootstrap.$inject = ['auth', 'authomator'];

  angular
    .module('app')
    .run(checkAccessDuringApplicationBootstrap);

})(angular);
