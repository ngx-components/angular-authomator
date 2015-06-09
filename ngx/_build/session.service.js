(function () {

  function sessionService($log, localStorage){

    this._identity = JSON.parse(localStorage.getItem('session.identity'));
    this._accessToken = localStorage.getItem('session.accessToken');
    this._identityToken = localStorage.getItem('session.identityToken');
    this._refreshToken = localStorage.getItem('session.refreshToken');

    this.getIdentity = function(){
      return this._identity;
    };

    this.setIdentity = function(identity){
      this._identity = identity;
      localStorage.setItem('session.identity', JSON.stringify(identity));
      return this;
    };

    this.getAccessToken = function(){
      return this._accessToken;
    };

    this.setAccessToken = function(token){
      this._accessToken = token;
      localStorage.setItem('session.accessToken', token);
      return this;
    };

    this.getIdentityToken = function(){
      return this._identityToken;
    };

    this.setIdentityToken = function(token){
      this._identityToken = token;
      localStorage.setItem('session.identityToken', token);
      return this;
    };

    this.getRefreshToken = function(){
      return this._refreshToken;
    };

    this.setRefreshToken = function(token){
      this._refreshToken = token;
      localStorage.setItem('session.refreshToken', token);
      return this;
    };

    /**
     * Destroy session
     */
    this.destroy = function destroy(){
      this.setIdentity(null);
      this.setAccessToken(null);
      this.setIdentityToken(null);
      this.setRefreshToken(null);
    };

  }

  // Inject dependencies
  sessionService.$inject = ['$log', 'localStorage'];

  angular
    .module('app')
    .service('session', sessionService);

})();
