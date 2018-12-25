import template from './user-page.html';
import './user-page.pcss';
import { log } from "../common/util";

const name = 'userPage';  // 引用该组件的方式：<login-page></login-page>
const bindings = {};
const controller = function(loginService,filterFilter) {
  'ngInject';
  // log(location.search.substr(4));
  let roleId = location.search.substr(4);
  // this.currentUserType = "current user is : " + (roleId == 0 ? "admin" : "staff");
  // this.option = "none";

  if(roleId == 0){
    this.currentUserType = "current user is : admin.";
    this.option = "delete";
  }else{
    this.currentUserType = "current user is : staff.";
    this.option = "none";
  }
  
  this.nameFilter = "";
  this.users = [];
  this.allUsers = [];

  loginService.fetch().then(resp=>{
    // log(this);
    this.users = resp.data;
    this.allUsers = resp.data;
    // log(this.users);
  }).catch((err)=>{
    // log(this);
    this.users = err.data;
    // log(this.users)
  })

  this.filterUserName = function(){
    this.users = filterFilter(this.allUsers,this.nameFilter);//参数：数据源,筛选条件
  };

};

export default {
  name,
  template,
  bindings,
  controller,
}