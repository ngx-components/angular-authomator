describe('session service', function(){

  var session;

  beforeEach(module('app'));

  beforeEach(inject(function(_session_){
    session = _session_;
  }));

  it('should exist', function(){
    expect(session).to.be.ok;
  });

  describe('#destroy', function(){

    it('should be a function', function(){
      expect(session.destroy).to.be.a('function');
    });

  });

  describe('#destroy', function(){

    it('should clear the identityToken', function(){
      session.setIdentityToken('token');
      session.destroy();
      expect(session.getIdentityToken()).to.equal(null);
    });

    it('should clear the accessToken', function(){
      session.setAccessToken('token');
      session.destroy();
      expect(session.getAccessToken()).to.equal(null);
    });

    it('should clear the refreshToken', function(){
      session.setRefreshToken('token');
      session.destroy();
      expect(session.getRefreshToken()).to.equal(null);
    });

    it('should clear the identity', function(){
      session.setIdentity('identity');
      session.destroy();
      expect(session.getIdentity()).to.equal(null);
    });

  });

  describe('#setIdentity', function(){

    it('should set the identity correctly', function(){
      expect(session.getIdentity()).to.not.equal('identity');
      session.setIdentity('identity');
      expect(session.getIdentity()).to.equal('identity');
    });

  });

  describe('#setIdentityToken', function(){

    it('should set the identity token correctly', function(){
      expect(session.getIdentityToken()).to.not.equal('token');
      session.setIdentityToken('token');
      expect(session.getIdentityToken()).to.equal('token');
    });

  });

  describe('#setRefreshToken', function(){

    it('should set the refresh token correctly', function(){
      expect(session.getRefreshToken()).to.not.equal('token');
      session.setRefreshToken('token');
      expect(session.getRefreshToken()).to.equal('token');
    });

  });

  describe('#setAccessToken', function(){

    it('should set the access token correctly', function(){
      expect(session.getAccessToken()).to.not.equal('token');
      session.setAccessToken('token');
      expect(session.getAccessToken()).to.equal('token');
    });

  });

});
