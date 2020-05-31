import React, { Component } from "react";
import { Row} from "reactstrap";
import Item from "./item";

class Home extends Component {
    items = [
        {
            name: "Nile Special",
            quantity: 340,
        },
        {
            name: "Nile Special",
            quantity: 34,
        },
        {
            name: "Nile Special",
            quantity: 39,
        },
        {
            name: "Nile Special",
            quantity: 40,
        },
        {
            name: "Nile Special",
            quantity: 100,
        },
        {
            name: "Nile Special",
            quantity: 90,
        }
    ]
    render() {
        return (
            <>
                <Row>
                {
                    this.items.map((item, index) => (
                        <Item item={item} key={index} />
                    ))
                }
                </Row>
            </>
        )
    }
}
export default Home;
