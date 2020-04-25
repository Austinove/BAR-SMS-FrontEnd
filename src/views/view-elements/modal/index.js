import React, { useState } from 'react'
import {
    Button,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Table
} from "reactstrap";
import { CustomAlert } from '../alert';

const CustomModal = (props) => {
    const { buttonLabel, className, expences } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="light" onClick={toggle} size="lg">
                <span className="mr-2 text-info mb-0">{buttonLabel}</span>
            </Button>
            <Modal 
                isOpen={modal} 
                fade={false} 
                className={className}
            >
                <ModalHeader toggle={toggle}>Expences Details</ModalHeader>
                <ModalBody>
                    <Table className="no-wrap v-middle" responsive>
                        <thead>
                            <tr className="border-0">
                                <th className="border-0">Amount</th>
                                <th className="border-0">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expences.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.amount}
                                    </td>
                                    <td>{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </Table>
                    <CustomAlert
                        alertColor="info "
                        alertDetails="  40000 Total Expences"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CustomModal;
