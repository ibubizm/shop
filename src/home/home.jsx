import { CardItem } from '../card/card'
import { useEffect, useState } from 'react'
import { ModalCard } from '../card/modalCard'
import { Slider } from './slider'
import { useDispatch, useSelector } from 'react-redux'

import { SideBar } from './sidebar'
import { Col, Row } from 'react-bootstrap'

import { BrandBar } from './brandBar'
import { addToBasket } from '../redux/reducers/actions'
import { createBasketItem, fetchBasket } from '../http/basketApi'


import { totalPrice, totalCount } from "../redux/reducers/actions"
import { fetchOneProduct } from '../http/productApi'




export const Home = () => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()
    const { items } = useSelector(({ ItemsReducer }) => ItemsReducer)
    const { id } = useSelector(({ UserReducer }) => UserReducer.user)

    const [itemId, setItemId] = useState()


    const dispatch = useDispatch()

    const openModal = (item) => {
        setVisible(true)
        setActiveItem(item)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const add = async (item) => {
        await createBasketItem(id, item.id)
            .then(data => setItemId(data.id))
        await fetchOneProduct(item.id)
            .then((data) => dispatch(addToBasket({ ...data, itemId })))
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
                    <Row>
                        {items.map((item, index) =>
                            <Col xs={4} key={`${index}_${Date.now().toString()}`}>
                                <CardItem
                                    item={item}
                                    onOpen={openModal}
                                    add={add}
                                />
                            </Col>
                        )}

                    </Row>
                </Col>

                {visible &&
                    <ModalCard item={activeItem} onOpen={openModal} onClose={closeModal} />
                }
            </Row>
        </div>
    )
}