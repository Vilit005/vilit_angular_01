import Mdle from '../common/mdle';
// import user from './user/user';
import loginPage from './login-page';
import loginService from '../provider/service-login';

const name = 'login';
let mdle = Mdle(name, []);
mdle.registService(loginService);
// mdle.registComponent(userPage);

// mdle.setRoutes({
//   '/user/:username': user.route,
//   // '/Book/:bookId/ch/:chapterId': chapter.route
// });

const page = loginPage;

export default {
  name,
  mdle,
  page
};