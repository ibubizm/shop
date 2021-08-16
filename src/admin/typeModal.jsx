import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import { useState } from 'react'
import { createType } from '../http/typeApi'

export const ModalType = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({ name: value })
            .then(data => setValue(''))
        onHide()
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >
                <Modal.Title>Add new type</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Input type</Form.Label>
                        <Form.Control onChange={(e) => setValue(e.target.value)} type="email" placeholder="phone" />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Close</Button>
                <Button onClick={addType } variant="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}