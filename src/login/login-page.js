import template from './login-page.html';
import './login-page.pcss';
// import { Ramda } from '../common/util';
// import { log } from "../common/util";
// import user from '../user/user';

const name = 'loginPage';  // 引用该组件的方式：<login-page></login-page>
const bindings = {};
const controller = function ($http,loginService) {
  'ngInject';
  this.loginTitle = '欢迎登录';
  // this.$location = $location;
 
  //对应假数据
  this.users = [];
  //用户输入的用户名和密码
  this.un = "";
  this.pw = "";
  // var loginUserIndex = -1;
  
  // loginService.fetch().then(resp => {
  //   this.users = resp.data;
  // })
  // .catch((err) => {
  //   this.users = err.data;
  // })

  
  
  this.HandleLogin = function () {
    // log(this.users[0].username);//假数据
    // log(this.un);//用户输入的数据
    
    //解决跨域请求方法1
    // var data = { username: this.un,password: this.pw };
    var data = "username="+this.un+"&password="+this.pw;
    var config = {
      headers: { "content-type": "application/x-www-form-urlencoded"}
    };
    $http.post("http://localhost:8081/api/login", data,config).then(function successCallback(response) {
        // alert(response.data);
        location.href = "/pages/user/index.html";
        sessionStorage.setItem("id",response.data.id);
      }, function errorCallback(response) {
        alert(response);
        alert("error username or password!")
    });

    // loginUserIndex = this.users.findIndex(user => { 
    //   return user.username == this.un && user.password == this.pw 
    // })
    // loginUserIndex != -1  ? (location.href = "/pages/user/index.html?id=" + this.users[loginUserIndex].id) : alert("error username or password!");
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}

//解决跨域请求方法2
// fetch(url, {
//           method: "POST",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: "请求参数"
//           }).then(function(res) {
//    console.log("Response succeeded?", JSON.stringify(res.ok));
//    console.log(JSON.stringify(res));
//   }).catch(function(e) {
//    console.log("fetch fail", JSON.stringify(params));
//   });