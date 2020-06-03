import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import ItemForms from "./itemForms";
import {
  fetchStoreItemsRequest,
  removeStoreItemRequest,
  createStoreItemRequest,
  editStoreItemRequest
} from "../../actions/itemsActions";
import { Simpleloader } from "../view-elements/loader";

const AddItem = (props) => {
  const { Loading, storeItems } = props;
  const [index, setindex] = useState(props.index);
  const [item, setitem] = useState();
  const [editFlag, seteditFlag] = useState(false);
  const toggle = () => {
    setindex(!index);
    setitem("");
    seteditFlag(false)
  };
  const editItem = (item) => {
    setitem(item);
    seteditFlag(true)
    setindex(!index);
  };
  useEffect(() => {
    props.fetchStoreItemsRequest()
  }, [storeItems]);
  const addNewItem = (itemData) => {
    console.log(itemData);
    props.createStoreItemRequest(itemData);
  }
  const editSelectedItem = (itemData) => {
    console.log(itemData)
    props.editStoreItemRequest(itemData);
  }
  return (
    <div>
      {index ? (
        <ItemForms 
        addNewItem = {addNewItem}
        editSelectedItem={editSelectedItem}
        editFlag={editFlag} 
        item={item} 
        toggle={toggle} 
        />
      ) : (
          <Container>
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <Button
                      color="light"
                      size="md"
                      onClick={toggle}
                      className="float-right"
                    >
                      <i className="fa fa-plus"></i> New Item
                  </Button>
                    <CardTitle className="item-header">Available Items</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              {Loading ? (
                <div className="full-width">
                  <Simpleloader />
                </div>
              )
                : storeItems.map((item, index) => (
                  <Col md="4" key={index}>
                    <Card>
                      <div>
                        <Button color="danger" size="sm" className="float-right">
                          <i className="fa fa-trash"></i>
                        </Button>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() => editItem(item)}
                          className="float-right mr-1"
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                      </div>
                      <CardBody className="pt-0 pb-0">
                        <div className="feed-widget">
                          <ul className="list-style-none feed-body m-0 pb-3">
                            <li className="feed-item">
                              <div className="feed-icon bg-info">
                                <i className="far fa-bell"></i>
                              </div>
                              <div>
                                <CardTitle className="item-title">
                                  {item.name}
                                </CardTitle>
                                <span className="ml-0 mt-4 font-14 text-muted">
                                  {item.manifacturer}
                                </span>
                              </div>
                              <span className="mt-4 ml-auto font-12 text-muted">
                                {item.price}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        )}
    </div>
  );
};
const mapStateToProps = ({ storeData }) => {
  const { Loading, storeItems } = storeData;
  return { Loading, storeItems };
};
export default connect(mapStateToProps, {
  fetchStoreItemsRequest,
  removeStoreItemRequest,
  createStoreItemRequest,
  editStoreItemRequest
})(AddItem);
