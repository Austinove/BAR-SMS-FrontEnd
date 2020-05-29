import React from 'react';
import { Container, CardTitle } from 'reactstrap';

const AccountList = () => {
    const Users = [
      {
        name: "Bryan Austin",
        contact: "0783003300",
      },
      {
        name: "K De Austin",
        contact: "0783003300",
      },
      {
        name: "Bryan De French",
        contact: "0783003300",
      }
    ];
    return (
      <Container>
        <CardTitle className="ml-4">Registered Users</CardTitle>
        <div className="feed-widget ml-4">
          <ul className="list-style-none feed-body m-0 pb-3">
            {Users.map((info, index) => (
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

export default AccountList