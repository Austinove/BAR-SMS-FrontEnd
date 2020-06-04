import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header/header.js";
import Sidebar from "../components/sidebar/sidebar.js";
import Footer from "../components/footer/footer.js";
import ThemeRoutes from "../routes/routing.js";
import Loader from "../views/view-elements/loader/index.js";

const Fulllayout = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  props.history.listen((location, action) => {
    if (
      window.innerWidth < 767 &&
      document
        .getElementById("main-wrapper")
        .className.indexOf("show-sidebar") !== -1
    ) {
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
    }
  });
  useEffect(() => {
    const updateDimensions = () => {
      let element = document.getElementById("main-wrapper");
      setWidth(window.innerWidth);
      if (width < 1170) {
        element.setAttribute("data-sidebartype", "mini-sidebar");
        element.classList.add("mini-sidebar");
      } else {
        element.setAttribute("data-sidebartype", "full");
        element.classList.remove("mini-sidebar");
      }
    };
    window.addEventListener("load", updateDimensions.bind(null));
    window.addEventListener("resize", updateDimensions.bind(null));
    return () => {
      window.removeEventListener("load", updateDimensions.bind(null));
      window.removeEventListener("resize", updateDimensions.bind(null));
    };
  }, [width]);
  return (
    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header />
      <Sidebar {...props} routes={ThemeRoutes} />
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Suspense
            fallback={
              <Loader />
            }
          >
            <Switch>
              {ThemeRoutes.map((prop, key) => {
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                } else {
                  return (
                    <Route
                      path={prop.path}
                      exact
                      component={prop.component}
                      key={key}
                    />
                  );
                }
              })}
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Fulllayout;
