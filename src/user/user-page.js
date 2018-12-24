import template from './user-page.html';
import './user-page.pcss';
import { log } from "../common/util";

const name = 'userPage';  // 引用该组件的方式：<login-page></login-page>
const bindings = {};
const controller = function(userService) {
  'ngInject';
  this.userTitle = 'I am user.......';
  this.users = [];
  
  userService.fetch().then(resp=>{
    log(this);
    this.users = resp.data;
    log(this.users);
  }).catch((err)=>{
    log(this);
    this.users = err.data;
    log(this.users)
  })

  this.userHandle = function(){
  };

};

export default {
  name,
  template,
  bindings,
  controller,
}