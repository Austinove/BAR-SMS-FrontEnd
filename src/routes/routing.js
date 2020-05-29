import Starter from "../views/starter/starter.js";
// ui components
import Home from "../views/home";
import Sales from "../views/sales";
import Profits from "../views/profits";
import Stock from "../views/stock";
import Alerts from "../views/ui-components/alert.js";
import Badges from "../views/ui-components/badge.js";
import Buttons from "../views/ui-components/button.js";
import Cards from "../views/ui-components/cards.js";
import LayoutComponent from "../views/ui-components/layout.js";
import PaginationComponent from "../views/ui-components/pagination.js";
import PopoverComponent from "../views/ui-components/popover.js";
import TooltipComponent from "../views/ui-components/tooltip.js";
import StockLogs from "../views/stock/logs/index.js";
import Profile from "../views/accounts/profile/index.js";
import AddItem from "../views/items/index.js";
import AccountSetting from "../views/accounts/settings/index.js";

var ThemeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ti-loop",
    component: Home,
  },
  {
    path: "/sales",
    name: "Sales",
    icon: "mdi mdi-arrange-send-backward",
    component: Sales,
  },
  {
    path: "/profits",
    name: "profits stat",
    icon: "fas fa-chart-bar",
    component: Profits
  },
  {
    path: "/stock",
    name: "Store/Store",
    icon: "mdi mdi-arrange-send-backward",
    component: Stock
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ti-loop",
    component: Profile
  },
  {
    path: "/create/item",
    name: "New Item",
    icon: "ti-loop",
    component: AddItem
  },
  {
    path: "/home",
    name: "Home",
    icon: "ti-loop",
    component: Starter,
  },
  {
    path: "/alert",
    name: "Alerts",
    icon: "mdi mdi-comment-processing-outline",
    component: Alerts,
  },
  {
    path: "/badge",
    name: "Badges",
    icon: "mdi mdi-arrange-send-backward",
    component: Badges,
  },
  {
    path: "/button",
    name: "Buttons",
    icon: "mdi mdi-toggle-switch",
    component: Buttons,
  },
  {
    path: "/card",
    name: "Cards",
    icon: "mdi mdi-credit-card-multiple",
    component: Cards,
  },
  {
    path: "/grid",
    name: "Grid",
    icon: "mdi mdi-apps",
    component: LayoutComponent,
  },
  {
    path: "/pagination",
    name: "Pagination",
    icon: "mdi mdi-priority-high",
    component: PaginationComponent,
  },
  {
    path: "/popover",
    name: "Popover",
    icon: "mdi mdi-pencil-circle",
    component: PopoverComponent,
  },
  {
    path: "/ui-components/tooltip",
    name: "Toltips",
    icon: "mdi mdi-image-filter-vintage",
    component: TooltipComponent,
  },
  {
    path: "/stock/logos",
    component: StockLogs,
    innerRoutes: true
  },
  {
    path: "/account/setting",
    component: AccountSetting,
    innerRoutes: true
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;
