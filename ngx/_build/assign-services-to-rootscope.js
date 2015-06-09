(function (angular) {

  function assignServicesToRootScope($rootScope, auth, session){
    $rootScope.auth = auth;
    $rootScope.session = session;
  }

  // Inject dependencies
  assignServicesToRootScope.$inject = ['$rootScope', 'auth', 'session'];

  angular
    .module('app')
    .run(assignServicesToRootScope);

})(angular);
