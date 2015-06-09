[![AngularJS Express](http://i.imgur.com/nTj9QgN.png)](https://github.com/angular-express/angular-express)

## Angular authomator

Component to integrate with an [Authomator](https://github.com/authomator) backend:

- includes `auth` service with authentication logic
- includes `session` service to keep track of session data
- exposes `auth` and `session` on `$rootScope` 
- includes code to check access during application bootstrap
- includes code to check access during route/state changes
- includes HTTP interceptor that redirects to login page when 401 response is received
- includes unit tests

## Installation

First install the component:

```bash
$ ngx install angular-authomator
```

Then:

- edit `app.config.authomator.js` in the `_build` directory and supply your Authomator url.
- remove files you don't need e.g. if you don't need a state change listener, HTTP interceptor, etc.

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## Requirements

Make sure the [angular-authomator](https://github.com/authomator/angular-authomator) module is loaded.

## Auth service

### auth.redirectToLoginPage()

Redirect to the Authomator login page. Helper function for auth.login() but can be called directly as well.

##### Arguments

none

##### Returns

`void`

##### Example

In script:

```javascript
if(!auth.isLoggedIn()){
  return auth.redirectToLoginPage();
}

```

In markup:

```xml
<a ng-click="auth.redirectToLoginPage()">Log in</a>
```

### auth.logIn()

Log in. Redirect to Authomator login page.

After logging in successfully on the Authomator login page, the `session` data will be available and `auth.isLoggedIn()` will return `true`.

##### Arguments

none

##### Returns

`void`

##### Example

In script:

```javascript
if(!auth.isLoggedIn()){
  return auth.logIn();
}

```

In markup:

```xml
<a ng-click="auth.logIn()">Log in</a>
```

### auth.logOut()

Log out. Log out user and destroy session data.

##### Arguments

none

##### Returns

`void`

##### Example

In script:

```javascript
if(auth.isLoggedIn()){
  return auth.logOut();
}

```

In markup:

```xml
<a ng-click="auth.logOut()">Log out</a>
```

### auth.isLoggedIn()

Checks whether user is logged in or not.

##### Arguments

none

##### Returns

`Boolean

##### Example

In script:

```javascript
if(!auth.isLoggedIn()){
  return auth.redirectToLoginPage();
}

```

In markup:

```xml
<h1 ng-if="auth.isLoggedIn()">Logged in!</h1>
```

## Session service


## Change log

### v1.0.0

- Used in production

### v0.4.0

- Added HTTP interceptor

### v0.3.0

- Added access control scripts

### v0.2.0

- Added session service
- Added auth service

### v0.1.0

- Initial version

## License

MIT.
