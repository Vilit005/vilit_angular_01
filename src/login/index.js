import './index.css';
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import login from './login';
// import loginPage from './login-page';

const dependencies = [
  // 'ngRoute',
   login.name,
];

// const clicks = Rx.fromEvent(document, 'click');
// clicks.pipe(
//   RxOper.throttleTime(1000),
//   RxOper.scan(count => count + 1, 0)
// ).subscribe(count => log(`Clicked ${count} times`));

const app = InitApp(generateLangs(enUS, zhCN), dependencies, login.page);

export default app;
