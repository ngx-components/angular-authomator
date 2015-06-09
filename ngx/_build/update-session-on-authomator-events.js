(function (angular) {

  function listenForStateChanges($rootScope, session, authomator){

    $rootScope.$on('authomator.identityTokenUpdated', function(event, decoded){
      session.setIdentity(decoded);
      session.setIdentityToken(authomator.getIdentityToken());
    });

    $rootScope.$on('authomator.accessTokenUpdated', function(event, decoded){
      session.setAccessToken(authomator.getAccessToken());
    });

    $rootScope.$on('authomator.refreshTokenUpdated', function(event, decoded){
      session.setRefreshToken(authomator.getRefreshToken());
    });

  }

  // Inject dependencies
  listenForStateChanges.$inject = ['$rootScope', 'session', 'authomator'];

  angular
    .module('app')
    .run(listenForStateChanges);

})(angular);
