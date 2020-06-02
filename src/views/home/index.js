import React, { Component } from "react";
import { Row} from "reactstrap";
import { connect } from "react-redux";
import Item from "./item";
import { counterItemsRequest } from "../../actions/counterActions";

class Home extends Component {
    componentDidMount(){
        this.props.counterItemsRequest();
    }
    render() {
        return (
            <>
                {this.props.Loading ? (
                    <div className="text-primary">
                        <strong className=" font-20">Loading.....</strong>
                    </div>
                ):(
                    <Row>
                        {
                            this.props.counterItems.map((item, index) => (
                                <Item item={item} key={index} />
                            ))
                        }
                    </Row>
                )}
            </>
        )
    }
}
const mapStateToProps = ({ counter }) =>{
    const { Loading, counterItems } = counter;
    return {
        Loading,
        counterItems
    }
}
export default connect(mapStateToProps, { counterItemsRequest })(Home);
