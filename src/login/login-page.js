import template from './login-page.html';
import './login-page.pcss';
import { log,Ramda } from "../common/util";
import user from '../user/user';

const name = 'loginPage';  // 引用该组件的方式：<login-page></login-page>
const bindings = {};
const controller = function (loginService) {
  'ngInject';
  this.loginTitle = 'I am login.......';
  
  //对应假数据
  this.users = [];
  
  //用户输入的用户名和密码
  this.un = "";
  this.pw = "";


  loginService.fetch().then(resp => {
    // log(this);
    this.users = resp.data;
    log(this.users);
  }).catch((err) => {
    log(this);
    // this.users = err.data;
    // log(this.users);
  })

  this.HandleLogin = function () {
    // log(this.users[0].username);//假数据
    // log(this.un);//用户输入的数据
    // log(this.users[0].username == this.un && this.users[0].password == this.pw ? "login success" : "error username or password.");
    (this.users).forEach(user => {
      if(user.username == this.un && user.password == this.pw){
          log(user.roleId == 0 ? "login success,you are the admin!" : "login success,this is a staff account!");
      }else{
          log("error username or password.");
      }
    });
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}