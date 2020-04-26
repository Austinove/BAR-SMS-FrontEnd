import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Row
} from "reactstrap";
import StoreItem from "./storeItem";

const Items = [
    {
        name: "Bell",
        quantity: 100
    },
    {
        name: "Pepsi",
        quantity: 500
    },
    {
        name: "CocaCola",
        quantity: 300
    },
    {
        name: "Nile Special",
        quantity: 450
    },
    {
        name: "CocaCola",
        quantity: 300
    },
    {
        name: "Nile Special",
        quantity: 450
    }
];

const Stock = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Items in Your Store</CardTitle>
                            <CardSubtitle>
                                This shows the amount of all the items in your store
                            </CardSubtitle>
                            <CardSubtitle>
                                This is where you can add items to store, and from store to Counter
                            </CardSubtitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Row>
                {
                    Items.map((item, index) => (
                        <StoreItem key={index} item={item} />
                    ))
                }
            </Row>
        </div>
    );
}

export default Stock;