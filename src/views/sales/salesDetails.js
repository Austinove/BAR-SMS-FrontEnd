import React from "react";
import { Table } from "reactstrap";
import img1 from "assets/images/users/1.jpg";
import { Simpleloader } from "../view-elements/loader";
const salesDetails = (props) => {
  const { salesDetails } = props;
  return (
    <Table className="no-wrap v-middle font-13" responsive>
      <thead>
        <tr className="border-0">
          <th className="border-0">Item Name</th>
          <th className="border-0">Present</th>
          <th className="border-0">Sold</th>
          <th className="border-0">Price</th>
          <th className="border-0">Amount</th>
        </tr>
      </thead>
      <tbody>
        {salesDetails ? (
          salesDetails.map((sale, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img1}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-13 font-medium">{sale.name}</h5>
                    <span>{sale.counter}</span>
                  </div>
                </div>
              </td>
              <td>{sale.present}</td>
              <td>{sale.sold}</td>
              <td>{sale.price}</td>
              <td className="blue-grey-text  text-darken-4 font-medium">
                {sale.amount}
              </td>
            </tr>
          ))
        ) : (
          <Simpleloader />
        )}
      </tbody>
    </Table>
  );
};

export default salesDetails;
