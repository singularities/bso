const AuthService = {
  isAuthenticated: false,

  signin(callback: VoidFunction) {
    AuthService.isAuthenticated = true;

    setTimeout(callback, 100); // fake async
  },

  signout(callback: VoidFunction) {
    AuthService.isAuthenticated = false;

    setTimeout(callback, 100);
  }
};

export default AuthService
