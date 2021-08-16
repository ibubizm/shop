import { useEffect, useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { fetchOneProduct } from '../http/productApi'
import { currentItem } from '../redux/reducers/actions'
import { useParams } from "react-router"
import { useDispatch } from 'react-redux'


export const ItemPage = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()


    useEffect(() => {
        fetchOneProduct(id)
            .then(data => setProduct(data))
    }, [])

    return (
        <>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={'http://localhost:5000/' + product.img} />
                </Col>
                <Col md={4} >
                    <h2>{product.name}</h2>
                </Col>
            </Row>
        </>
    )
}