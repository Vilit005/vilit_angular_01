import './index.css';
// import { Rx, RxOper, log } from "../common/util";
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import user from './user';
// import userPage from './user-page';

const dependencies = [
  // 'ngRoute',
   user.name,
];

// const clicks = Rx.fromEvent(document, 'click');
// clicks.pipe(
//   RxOper.throttleTime(1000),
//   RxOper.scan(count => count + 1, 0)
// ).subscribe(count => log(`Clicked ${count} times`));

//最后一个参数loginPage为组件名称 - 转 驼峰
const app = InitApp(generateLangs(enUS, zhCN), dependencies, user.page);

// app.set

export default app;
