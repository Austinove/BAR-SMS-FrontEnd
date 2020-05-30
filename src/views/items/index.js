import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  Button
} from "reactstrap";
import ItemForms from './itemForms';

const AddItem = (props) => {
  const [index, setindex] = useState(props.index);
  const [item, setitem] = useState();
  const toggle = () => {
    setindex(!index);
    setitem("");
  }
  const editItem = (item) => {
    setitem(item);
    setindex(!index);
  }

  const items = [
    {
      name: "Nile Special",
      manufacturer: "Nile Manufactures LTD",
      price: 3500,
      crateSize: 25
    },
    {
      name: "Pilsnar",
      manufacturer: "Nile Manufactures LTD",
      price: 3000,
      crateSize: 20
    },
    {
      name: "Tusker",
      manufacturer: "Nile Manufactures LTD",
      price: 3200,
      crateSize: 25
    },
    {
      name: "Nile Special",
      manufacturer: "Nile Manufactures LTD",
      price: 3500,
      crateSize: 20
    },
    {
      name: "Nile Special",
      manufacturer: "Nile Manufactures LTD",
      price: 3500,
      crateSize: 25
    }
  ]
  return (
    <div>
      {index ?
        <ItemForms item={item} toggle={toggle}/>
        :
        <Container>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Button color="light" size="md" onClick={toggle} className="float-right">
                    <i className="fa fa-plus"></i> New Item
                  </Button>
                  <CardTitle className="item-header">Available Items</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            {items.map((item, index) => (
              <Col md="4" key={index}>
                <Card>
                  <div>
                    <Button color="danger" size="sm" className="float-right">
                      <i className="fa fa-trash"></i>
                    </Button>
                    <Button color="primary" size="sm" onClick={()=>editItem(item)} className="float-right mr-1">
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
                            <CardTitle className="item-title">{item.name}</CardTitle>
                            <span className="ml-0 mt-4 font-14 text-muted">{item.manifacturer}</span>
                          </div>
                          <span className="mt-4 ml-auto font-12 text-muted">{item.price}</span>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      }
    </div>
  );
}
export default AddItem
