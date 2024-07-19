import DashboardPage from "../pages/DashboardPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import RegistersPages from "../pages/RegistersPages.vue";
import CustomPage from "../pages/CustomPage.vue";
import WorkersPage from "../pages/WorkersPage.vue";
import HistoriesPage from "../pages/HistoriesPage.vue";
import MyAccountPage from "../pages/MyAccountPage.vue";
import HelpSupportPage from "../pages/HelpSupportPage.vue";

const DASHBOARD = 'dashboard';
const DASHBOARD_PATH = '/dashboard';
const LOGIN = 'login';
const LOGIN_PATH = '/login';
const REGISTER = 'register';
const REGISTER_PATH = '/register';

const routes = [
  {
    path: DASHBOARD_PATH,
    component: DashboardPage,
    name: DASHBOARD,
  },
  {
    path: LOGIN_PATH,
    component: LoginPage,
    name: LOGIN,
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/registers",
    component: RegistersPages,
    name: "registers",
  },
  {
    path: "/custom",
    component: CustomPage,
    name: "custom",
  },
  {
    path: "/workers",
    component: WorkersPage,
    name: "workers",
  },
  {
    path: "/histories",
    component: HistoriesPage,
    name: "histories",
  },
  {
    path: "/my-account",
    component: MyAccountPage,
    name: "my-account",
  },
  {
    path: "/help-support",
    component: HelpSupportPage,
    name: "help-support",
  },
  {
    path: "/logout",
    component: LoginPage,
    name: "logout",
  },
];

export default routes;
