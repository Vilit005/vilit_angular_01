export default {
    name: 'loginService',
    fn: function ($http) {
      'ngInject'
      this.fetch = () => $http.get('/someapi/user');
      // this.fetch = () => $http.post('http://localhost:8081/api/login');
    },
    mockFn: function ($http) {
      'ngInject'
      // this.fetch = () => $http.post('http://localhost:8081/api/login');
      this.fetch = () => $http.get('/stub/users.json');
    }
  }