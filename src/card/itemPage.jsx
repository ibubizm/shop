import { useEffect, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { fetchOneProduct } from '../http/productApi'
import { currentItem } from '../redux/reducers/actions'
import { useParams } from "react-router"
import { useDispatch } from 'react-redux'
import Image from 'react-bootstrap/Image'


export const ItemPage = () => {
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()


    useEffect(() => {
        fetchOneProduct(id)
            .then(async data => await setProduct(data))
    }, [])

    return (
        <>
            <Row>
                <Col >
                    <Image src={'http://localhost:5000/' + product.img} />
                </Col>
                <Col md={4} >
                    <h1 style={{ textTransform: 'uppercase' }}>{product.name}</h1>
                    <Row>
                        {product.info.length !== 0 ?
                            product.info.map(item =>
                                <div style={{ display: 'flex', fontSize: 30 }} key={item.id} className="info">
                                    <span style={{ marginRight: 15 }}>{item.title}: </span>
                                    <span>{item.description}</span>
                                </div>)

                            :
                            <p>no info about product</p>}
                    </Row>

                </Col>

                <div className="modal-footer float-left mt-4">
                    <h3>{product.price} BYN</h3>
                    <button type="button" className="btn btn-primary">Add to card</button>
                </div>
            </Row>
        </>
    )
}