import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import { useState } from 'react'
import { createBrand } from '../http/brandApi'

export const ModalBrand = ({ show, onHide }) => {
    const [value, setValue] = useState()

    const onAdd = () => {
        createBrand({ name: value })
            .then((data) => setValue(''))
        onHide()
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >
                <Modal.Title>Add new brand</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Input brand</Form.Label>
                        <Form.Control onChange={(e) => setValue(e.target.value)} type="text" placeholder="sony" />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Close</Button>
                <Button onClick={onAdd} variant="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}