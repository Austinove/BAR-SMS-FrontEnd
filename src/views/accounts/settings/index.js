import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import ChangePass from "./changePass";
import AddUser from "./addUser";
import AccountList from "./accountList";

const AccountSetting = (props) => {
  const [tabs, settabs] = useState(1);
  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    settabs(index)
  };
  return (
    <Row>
      <Col md="9" className="ml-auto mr-auto">
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 1,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                  Manage Account
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 2,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                  Add New Users
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 3,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                  Accounts List
                </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + tabs}>
              <TabPane tabId="tabs1">
                <ChangePass />
              </TabPane>
              <TabPane tabId="tabs2">
                <AddUser />
              </TabPane>
              <TabPane tabId="tabs3">
                <AccountList />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
export default AccountSetting;
