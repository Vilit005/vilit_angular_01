import Mdle from '../common/mdle';
import userPage from './user-page';
import loginService from '../provider/service-login';
// import filterReverse from "../provider/filter-reverse";

const name = 'user';
let mdle = Mdle(name, []);
mdle.registService(loginService);
// mdle.registComponent(userPage);
// mdle.registFilter(filterReverse);

const page = userPage;

export default {
  name,
  mdle,
  page
};