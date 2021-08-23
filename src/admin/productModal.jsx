import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button, Dropdown, Col, Row } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { createProduct } from '../http/productApi'

export const ModalProduct = ({ show, onHide }) => {
    const { types } = useSelector(({ ItemsReducer }) => ItemsReducer)
    const { brands } = useSelector(({ ItemsReducer }) => ItemsReducer)

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [fileName, setFile] = useState()

    const [currentType, setType] = useState()
    const [typeId, setTypeId] = useState()

    const [currentBrand, setBrand] = useState()
    const [brandId, setBrandId] = useState()

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const onAdd = () => {
        const formData = new FormData()
        formData.append('name', title)
        formData.append('price', price.toString())
        formData.append('img', fileName)
        formData.append('typeId', typeId)
        formData.append('brandId', brandId)
        formData.append('info', JSON.stringify(info))
        createProduct(formData)
            .then(data => onHide())
    }

    const typePick = (id, name) => {
        setTypeId(id)
        setType(name)
    }

    const brandPick = (id, name) => {
        setBrandId(id)
        setBrand(name)
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton >
                <Modal.Title>Add new product</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>{currentType || 'Type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map(type =>
                                <Dropdown.Item
                                    onClick={() => typePick(type.id, type.name)}
                                    key={`${type.id}_${Date.now().toString()}`}>
                                    {type.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle>{currentBrand || 'Brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => brandPick(brand.id, brand.name)}
                                    key={`${brand.id}_${Date.now().toString()}`}>
                                    {brand.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>product name</Form.Label>
                            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="sony" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>price</Form.Label>
                            <Form.Control onChange={(e) => setPrice(e.target.value)} type="number" placeholder="price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>file</Form.Label>
                            <Form.Control onChange={selectFile} type="file" />
                        </Form.Group>
                    </Form>

                </Form>
                <hr />
                <Button className={'mb-3'} onClick={addInfo} variant="outline-dark">add prop</Button>
                {
                    info.map(i =>
                        <Row key={i.number} className="mb-2">
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="input name" />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="input description" />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant="outline-danger">delete</Button>
                            </Col>
                        </Row>
                    )
                }
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Close</Button>
                <Button onClick={onAdd} variant="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}