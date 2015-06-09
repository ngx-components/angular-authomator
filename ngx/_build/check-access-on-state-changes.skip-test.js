(function (angular) {

  function checkAccessOnStateChange($rootScope, auth){

    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){

      // Check access and redirect to login if necessary
      console.log('$locationChangeStart: check access');
      if(!auth.isLoggedIn()){
        console.log('$locationChangeStart: not logged in => redirect to login page');
        event.preventDefault();
      }

    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

      // Check access and redirect to login if necessary
      console.log('$stateChangeStart: check access');
      if(!auth.isLoggedIn()){
        console.log('$stateChangeStart: not logged in => redirect to login page');
        event.preventDefault();
      }

    });

  }

  // Inject dependencies
  checkAccessOnStateChange.$inject = ['$rootScope', 'auth'];

  angular
    .module('app')
    .run(checkAccessOnStateChange);

})(angular);
