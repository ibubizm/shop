import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button, Dropdown } from "react-bootstrap"
import { useSelector } from 'react-redux'

export const ModalProduct = ({ show, onHide }) => {
    const items = useSelector(({ ItemsReducer }) => ItemsReducer.items)
    console.log(items)
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >
                <Modal.Title>Add new product</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>pick type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.map(item =>
                                <Dropdown.Item key={Date.now().toString()}>{item.title}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>pick brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.map(item =>
                                <Dropdown.Item key={Date.now().toString()}>{item.price}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>product name</Form.Label>
                            <Form.Control type="text" placeholder="sony" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" placeholder="price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>file</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Close</Button>
                <Button variant="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}