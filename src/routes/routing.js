import Home from "../views/home";
import Sales from "../views/sales";
import Profits from "../views/profits";
import Stock from "../views/stock";
import StockLogs from "../views/stock/logs/index.js";
import Profile from "../views/accounts/profile/index.js";
import AddItem from "../views/items/index.js";
import AccountSetting from "../views/accounts/settings/index.js";
import Expences from "../views/expences/index.js";

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