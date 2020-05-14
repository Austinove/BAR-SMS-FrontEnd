import React from "react";
import {
    Table,
} from "reactstrap";

const Logs = [
    {
        log_date: "26/4/2020",
        item_action: "Added to Store",
        itemName: "Nile Special",
        quantity: 30
    },
    {
        log_date: "26/4/2020",
        item_action: "Added to Store",
        itemName: "Nile Special",
        quantity: 30
    },
    {
        log_date: "26/4/2020",
        item_action: "Added to Store",
        itemName: "Nile Special",
        quantity: 30
    },
    {
        log_date: "26/4/2020",
        item_action: "Added to Store",
        itemName: "Nile Special",
        quantity: 30
    },
]

const LogDetails = () => {
    return (

        <Table className="no-wrap v-middle" responsive>
            <thead>
                <tr className="border-0">
                    <th className="border-0">Date</th>
                    <th className="border-0">Items Name</th>
                    <th className="border-0">Action</th>
                    <th className="border-0">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {Logs.map((log, index) => (
                    <tr key={index}>
                        <td>
                            {log.log_date}
                        </td>
                        <td>
                            {log.itemName}
                        </td>
                        <td>
                            {log.item_action}
                        </td>
                        <td>{log.quantity}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}

export default LogDetails;