import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button'
import { BasketItem } from "./basket_item"
import { useEffect } from "react"
import { deleteFromCart } from "../redux/reducers/actions"
import { useState } from "react"

import { deleteItemFromBasket } from "../http/basketApi"

export const Basket = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ BasketReducer }) => BasketReducer.items)
    const userId = useSelector(({ UserReducer }) => UserReducer.user.id)
    const { price, count } = useSelector(({ BasketReducer }) => BasketReducer)
    const [basketProduct, setBasketProduct] = useState([])

    useEffect(() => {
        setBasketProduct(items)
    }, [items])


    const del = async (item, index) => {
        basketProduct.splice(index, 1)
        dispatch(deleteFromCart(basketProduct))
        await deleteItemFromBasket(userId, item.id, item.itemId)
    }

    return (
        <>
            <h1>basket</h1>
            <div className="row mb-5  row-cols-lg-2" >

                {basketProduct.length ?
                    basketProduct.map((item, index) =>
                        <BasketItem item={item} index={index} del={del} />
                    )
                    :
                    <h1>cart is empty</h1>
                }
            </div>
            <div className="footer" style={{ backgroundColor: 'gainsboro', width: 300 }}>
                <div className="footer__date" style={{ display: 'grid' }}>
                    <span>Total price: {price}</span>
                    <span>Total count: {count}</span>
                </div>
                <Button variant="primary" >pay</Button>
            </div>

        </>
    )
}