export default {
    name: 'loginService',
    fn: function () {
      'ngInject'
      // this.fetch = () => $http.get('/someapi/user');
      this.fetch = () => $http.post('http://localhost:8081/api/login');
 

    },

    mockFn: function () {
      'ngInject'
      // this.fetch = () => $http.post('http://localhost:8081/api/login');
      this.fetch = () => $http.get('/stub/users.json?v=12131');
//       this.fetch = this.fetch('http://localhost:8081/api/login', 
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//           },
//           body: "请求参数"
//         }
//       )




    }
  }