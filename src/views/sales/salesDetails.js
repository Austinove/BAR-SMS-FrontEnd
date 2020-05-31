import React from "react";
import { Table } from "reactstrap";
import img1 from "assets/images/users/1.jpg";
const details = [
  {
    name: "Nile Special",
    counter: 35,
    present: 10,
    sold: 15,
    price: 2000,
    amount: 30000,
  },
  {
    name: "Nile Special",
    counter: 35,
    present: 10,
    sold: 15,
    price: 2000,
    amount: 30000,
  },
  {
    name: "Nile Special",
    counter: 35,
    present: 10,
    sold: 15,
    price: 2000,
    amount: 30000,
  },
  {
    name: "Nile Special",
    counter: 35,
    present: 10,
    sold: 15,
    price: 2000,
    amount: 30000,
  },
  {
    name: "Nile Special",
    counter: 35,
    present: 10,
    sold: 15,
    price: 2000,
    amount: 30000,
  },
];
const salesDetails = (props) => {
  // const {details} = props;
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
        {details.map((sale, index) => (
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
        ))}
      </tbody>
    </Table>
  );
};

export default salesDetails;
