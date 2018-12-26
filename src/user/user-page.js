import template from './user-page.html';
import './user-page.pcss';
// import { log } from "../common/util";

const name = 'userPage';  // 引用该组件的方式：<login-page></login-page>
const bindings = {};
const controller = function(userService,filterFilter){
  'ngInject';
  // log(location.search.substr(4));
  let id = location.search.substr(4);
  // this.currentUserType = "current user is : " + (id == 1 ? "admin" : "staff");
  // this.option = "none";
  
  this.nameFilter = "";
  this.users = [];
  this.allUsers = [];
  this.visible=true;

  userService.fetch().then(resp=>{
    // log(this);
    this.users = resp.data;
    // log(this.users);
    this.allUsers = resp.data;
    var loginUser = (this.users).find(user => user.id == id );
    
    if(loginUser.role == 0){//目前有三种role admin的role为0
      this.currentUserType = "current user is : admin.";
      this.option = "delete";
      this.editBtnVisible = true;
    }else{
      this.currentUserType = "current user is : staff.";
      // this.option = "none";
      this.editBtnVisible = false;
    }
  }).catch((err)=>{
    // log(this);
    this.users = err.data;
    // log(this.users)
  })

  this.filterUserName =function(){
    this.users = filterFilter(this.allUsers,this.nameFilter);//参数：数据源,筛选条件
    this.visible=!(this.visible);
  };

  this.backUsers = function(){
    this.users = this.allUsers;
    this.visible=!(this.visible);
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}