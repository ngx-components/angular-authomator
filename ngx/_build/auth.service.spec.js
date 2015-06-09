describe('auth service', function(){

  var auth;
  var session;
  var stubRedirectToLoginPage;

  beforeEach(module('app'));

  beforeEach(inject(function(_auth_, _session_){
    auth = _auth_;
    session = _session_;
    stubRedirectToLoginPage = sinon.stub(auth, 'redirectToLoginPage');
  }));

  it('should exist', function(){
    expect(auth).to.be.ok;
  });

  describe('#redirectToLoginPage', function(){

    it('should be a function', function(){
      expect(auth.redirectToLoginPage).to.be.a('function');
    });

  });

  describe('#isLoggedIn', function(){

    it('should return false if session has no identity', function(){
      session.destroy();
      expect(auth.isLoggedIn()).to.equal(false);
    });

    it('should return true if session has identity', function(){
      session.setIdentity('identity');
      expect(auth.isLoggedIn()).to.equal(true);
    });

  });

  describe('#logIn', function(){

    it('should redirect to the login page', function(){
      auth.logIn();
      expect(stubRedirectToLoginPage).to.have.been.called;
    });

  });

  describe('#logOut', function(){

    it('should destroy the session', function(){
      session.setIdentity('identity');
      session.setIdentityToken('token');
      session.setAccessToken('token');
      session.setRefreshToken('token');
      auth.logOut();
      expect(session.getIdentity()).to.equal(null);
      expect(session.getIdentityToken()).to.equal(null);
      expect(session.getAccessToken()).to.equal(null);
      expect(session.getRefreshToken()).to.equal(null);
    });

    it('should redirect to the login page', function(){
      auth.logOut();
      expect(stubRedirectToLoginPage).to.have.been.called;
    });

  });


});
