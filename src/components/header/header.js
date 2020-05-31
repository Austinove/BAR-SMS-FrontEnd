import React from 'react';
import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    Collapse,
    DropdownItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import profilephoto from '../../assets/images/users/1.jpg';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import { Link } from 'react-router-dom';

const Header = () => {

    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/
    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    return (
        <header className="topbar navbarbg" data-navbarbg="skin1">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img src={logodarkicon} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <span className="logo-text text-secondary font-weight-bold">The Bar</span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button className="btn-link nav-toggler d-block d-md-none" onClick={() => showMobilemenu()}>
                        <i className="fa fa-list" />
                    </button>
                </div>
                <Collapse className="navbarbg" navbar data-navbarbg="skin1" >
                    <Nav className="ml-auto float-right" navbar>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="font-weight-bold">
                                Bryan <i className="fa fa-caret-down"/>
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                <Link to="/profile">
                                    <DropdownItem>
                                        <i className="ti-user mr-1 ml-1" /> Profile
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/account/setting">
                                    <DropdownItem>
                                        <i className="ti-settings mr-1 ml-1" /> Account Settings
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem href="/pages/login">
                                    <i className="fa fa-power-off mr-1 ml-1" /> Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
