import { CardItem } from '../card/card'
import { useState, useEffect } from 'react'
import { ModalCard } from '../card/modalCard'
import { Slider } from './slider'
import { useDispatch, useSelector } from 'react-redux'

import { SideBar } from './sidebar'
import { Col, Row } from 'react-bootstrap'

import { BrandBar } from './brandBar'
import { addToBasket } from '../redux/reducers/actions'
import { createBasketItem } from '../http/basketApi'


import { totalPrice, totalCount } from "../redux/reducers/actions"
import { fetchOneProduct } from '../http/productApi'
import { Pages } from '../nav/pages'

import { fetchProduct } from '../http/productApi'
import { fetchBrand } from '../http/brandApi'
import { fetchType } from '../http/typeApi'

import { allItems, type, brand, count_items_on_page } from '../redux/reducers/actions'





export const Home = () => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()
    const { items } = useSelector(({ ItemsReducer }) => ItemsReducer)
    const { id } = useSelector(({ UserReducer }) => UserReducer.user)

    const { brandId, typeId, limitOnPage, currentPage } = useSelector(({ ItemsReducer }) => ItemsReducer)

    const [itemId, setItemId] = useState()

    const dispatch = useDispatch()

    useEffect(() => {

        fetchType()
            .then(data => dispatch(type(data)))
        fetchBrand()
            .then(data => dispatch(brand(data)))
        fetchProduct(brandId, typeId, currentPage, limitOnPage)
            .then((data) => {
                dispatch(allItems(data.rows))
                dispatch(count_items_on_page(data.count))
            })

    }, [brandId, typeId, currentPage, limitOnPage, dispatch])





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
            <Pages />
        </div>
    )
}