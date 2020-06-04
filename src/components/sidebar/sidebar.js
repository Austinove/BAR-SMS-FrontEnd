import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Sidebar = (props) => {
    const expandLogo = () => {
        document.getElementById("logobg").classList.toggle("expand-logo");
    }
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }
    const storeCategory = props.routes.filter(route => (route.category === "Store"));
    const counterCategory = props.routes.filter(route => (route.category === "Counter"));
    const accountCategory = props.routes.filter(route => (route.category === "Account"));

    const renderNav = (category, routes) => {
        return (
            <>
                <div className="category">
                    <span>{category}</span>
                </div>
                {
                    routes.map((prop, key) => {
                        if (prop.redirect || prop.innerRoutes) {
                            return null;
                        }
                        else {
                            return (
                                <li className={activeRoute.bind(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item'} key={key}>
                                    <NavLink to={prop.path} className="sidebar-link" activeClassName="active">
                                        <i className={prop.icon} />
                                        <span className="hide-menu">{prop.name}</span>
                                    </NavLink>
                                </li>
                            );
                        }
                    })
                }
            </>
        )
    }
    return (
        <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
            <div className="scroll-sidebar">
                <PerfectScrollbar className="sidebar-nav">
                    <Nav id="sidebarnav">
                        {renderNav("Counter", counterCategory)}
                        {renderNav("Store", storeCategory)}
                        {renderNav("Account", accountCategory)}
                    </Nav>
                </PerfectScrollbar>
            </div>
        </aside>
    );
}
export default Sidebar;
