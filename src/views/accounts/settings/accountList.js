import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchUsersRequest } from "../../../actions/authActions";
import { Container, CardTitle } from 'reactstrap';
import { Simpleloader } from "../../view-elements/loader";

const AccountList = (props) => {
    const { Users, Loading } = props;
    useEffect(() => {
      props.fetchUsersRequest();
    }, [Users]);
    return (
      <Container>
        <CardTitle className="ml-4">Registered Users</CardTitle>
        <div className="feed-widget ml-4">
          <ul className="list-style-none feed-body m-0 pb-3">
            {Loading ? (<div><Simpleloader /></div>) :Users.map((info, index) => (
              <li className="feed-item" key={index}>
                <span className="ml-4 font-italic">{info.name}, {info.contact}</span>
                <span className="ml-auto mr-4 font-12">
                  <i
                    className="fa fa-trash pointed text-danger mr-4"
                    aria-hidden="true"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
}
const mapStateToProps = ({ auth }) => {
  const { Users, Loading } = auth;
  return { Users, Loading }
}
export default connect(mapStateToProps, { fetchUsersRequest })(AccountList)