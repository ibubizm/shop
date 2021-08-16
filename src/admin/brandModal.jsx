import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"

export const ModalBrand = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >
                <Modal.Title>Add new brand</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Input brand</Form.Label>
                        <Form.Control type="text" placeholder="sony" />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Close</Button>
                <Button variant="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}