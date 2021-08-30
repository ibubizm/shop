import { useEffect, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { fetchOneProduct } from '../http/productApi'
import { addToBasket, totalCount, totalPrice } from '../redux/reducers/actions'
import { useParams } from "react-router"
import { useDispatch } from 'react-redux'
import Image from 'react-bootstrap/Image'
import { createBasketItem } from "../http/basketApi"


export const ItemPage = () => {
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()
    const basketId = useSelector(({ UserReducer }) => UserReducer.user.id)
    // const [itemId, setItemId] = setState()

    const dispatch = useDispatch()

    useEffect(() => {
        fetchOneProduct(id)
            .then(async data => await setProduct(data))
    }, [])

    const add = async () => {
        await createBasketItem(basketId, product.id)
            .then(data => {
                dispatch(addToBasket({ ...product, itemId: data.id }))
                dispatch(totalCount())
                dispatch(totalPrice())
            })

    }

    return (
        <>
            <Row>
                <Col md={8} >
                    <Image style={{ maxWidth: 700 }} src={'http://localhost:5000/' + product.img} />
                </Col>
                <Col md={4} >
                    <h1 style={{ textTransform: 'uppercase' }}>{product.name}</h1>
                    <Row>
                        {product.info.length !== 0 ?
                            product.info.map(item =>
                                <div style={{ display: 'flex', fontSize: 30 }} key={item.id} className="info">
                                    <span style={{ marginRight: 15 }}>{item.title}: </span>
                                    <span>{item.description}</span>
                                </div>
                            )

                            :
                            <p>no info about product</p>}
                    </Row>

                </Col>

                <div className="modal-footer float-left mt-4">
                    <h3>{product.price} BYN</h3>
                    <button onClick={add} type="button" className="btn btn-primary">Add to card</button>
                </div>
            </Row>
        </>
    )
}