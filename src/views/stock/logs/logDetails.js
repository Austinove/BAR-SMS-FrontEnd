import React from "react";
import {
    Table,
} from "reactstrap";
import { Simpleloader } from "../../view-elements/loader";

const LogDetails = ({ Logs, Loading }) => {
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
                {Loading ? (
                    <tr><td span="4"><Simpleloader /></td></tr>
                ) : Logs.map((log, index) => (
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