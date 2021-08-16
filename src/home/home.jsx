import { Card } from '../card/card'
import { useState } from 'react'
import { ModalCard } from '../card/modalCard'
import { Slider } from './slider'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, allItems, brand, type } from '../redux/reducers/actions'
import { totalPrice, totalCount } from "../redux/reducers/actions"
import { useEffect } from 'react'
import { SideBar } from './sidebar'
import { Col, Row, Button } from 'react-bootstrap'

import { fetchProduct } from '../http/productApi'
import { fetchBrand } from '../http/brandApi'
import { fetchType } from '../http/typeApi'

import { BrandBar } from './brandBar'



export const Home = () => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()
    const items = useSelector(({ ItemsReducer }) => ItemsReducer.items)

    const dispatch = useDispatch()
    useEffect(() => {
        fetchType()
            .then(data => dispatch(type(data)))
        fetchBrand()
            .then(data => dispatch(brand(data)))
        fetchProduct()
            .then(({ rows }) => dispatch(allItems(rows)))
    }, [])


    const openModal = (item) => {
        setVisible(true)
        setActiveItem(item)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const add = (item) => {
        dispatch(addItem(item))
        dispatch(totalPrice())
        dispatch(totalCount())
    }


    return (
        <div className="container mt-5">
            <div className="page-title">
                <Slider />
            </div>

            <Row className="mt-5">
                <Col xs={3}>
                    <SideBar />
                </Col>
                <Col>
                    <BrandBar />
                </Col>
                <Row>
                    {items.map((item, index) =>
                        <Col xs={3} key={`${index}_${Date.now().toString()}`}>

                            <Card
                                item={item}
                                onOpen={openModal}
                                add={add}
                            />
                        </Col>
                    )}
                </Row>
                {visible &&
                    <ModalCard item={activeItem} onOpen={openModal} onClose={closeModal} />
                }
            </Row>
        </div>
    )
}