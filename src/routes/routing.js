import { lazy } from "react";
import { withRouter } from "react-router-dom";
// import Home from "../views/home";
const Sales = withRouter(lazy(() => import( "../views/sales")))
const Profits = withRouter(lazy(() => import( "../views/profits")))
const Stock = withRouter(lazy(() => import( "../views/stock")))
const StockLogs = withRouter(lazy(() => import( "../views/stock/logs/index.js")))
const Profile = withRouter(lazy(() => import( "../views/accounts/profile/index.js")))
const AddItem = withRouter(lazy(() => import( "../views/items/index.js")))
const AccountSetting = withRouter(lazy(() => import( "../views/accounts/settings/index.js")))
const Expences = withRouter(lazy(() => import( "../views/expences/index.js")))
const Home = withRouter(lazy(() => import("../views/home")));

var ThemeRoutes = [
  {
    category: "Counter",
    path: "/dashboard",
    name: "Dashboard",
    icon: "ti-loop",
    component: Home,
  },
  {
    category: "Counter",
    path: "/sales",
    name: "Sales",
    icon: "mdi mdi-arrange-send-backward",
    component: Sales,
  },
  {
    category: "Counter",
    path: "/businesses/expences",
    name: "Expences",
    icon: "fa fa-arrow-left",
    component: Expences,
  },
  {
    category: "Store",
    path: "/profits",
    name: "profits stat",
    icon: "fas fa-chart-bar",
    component: Profits
  },
  {
    category: "Store",
    path: "/stock",
    name: "Stock/Store",
    icon: "mdi mdi-arrange-send-backward",
    component: Stock
  },
  {
    category: "Store",
    path: "/create/item",
    name: "New Item",
    icon: "ti-loop",
    component: AddItem
  },
  {
    category: 'Account',
    path: "/account/profile",
    name: "Profile",
    icon: "ti-loop",
    component: Profile
  },
  {
    category: "Account",
    path: "/account/setting",
    name: "Account Settings",
    icon: "mdi mdi-image-filter-vintage",
    component: AccountSetting
  },
  {
    path: "/stock/logos",
    component: StockLogs,
    innerRoutes: true
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;