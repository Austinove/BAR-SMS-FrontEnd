import React, { useState } from "react";
import classnames from "classnames";
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
    ModalBody
} from "reactstrap";
import ModalInputs from "./modalInputs";
const CounterForms = (props) => {
    const { 
        btn_icon,
        subLabel,
        itemId,
        toggle 
    } = props
    const [tabs, settabs] = useState(1);
    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        settabs(index)
    };
    return (
        <ModalBody>
            <Row>
                <Col>
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
                                    Add To Counter
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
                                    Remove From Counter
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <Card className="shadow">
                        <CardBody>
                            <TabContent activeTab={"tabs" + tabs}>
                                <TabPane tabId="tabs1">
                                    <ModalInputs
                                        btn_icon={btn_icon}
                                        subLabel="Add item"
                                        itemId={itemId}
                                        toggle={toggle}
                                    />
                                </TabPane>
                                <TabPane tabId="tabs2">
                                    <ModalInputs
                                        btn_icon="fa fa-minus"
                                        subLabel="Remove item"
                                        itemId={itemId}
                                        toggle={toggle}
                                    />
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </ModalBody>
    )
}

export default CounterForms
