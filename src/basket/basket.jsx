import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button'
import { BasketItem } from "./basket_item"
import { useEffect } from "react"
import { totalPrice, deleteFromCart } from "../redux/reducers/actions"
import { useState } from "react"
// import { ModalAddress } from './modalAddress'

export const Basket = () => {
    const dispatch = useDispatch()
    const basketProduct = useSelector(({ ProductReducer }) => ProductReducer.items)
    const totalprice = useSelector(({ ProductReducer }) => ProductReducer.price)
    const [address, setAddress] = useState('')
    const [visible, setVisible] = useState(false)

    const del = (index) => {
        basketProduct.splice(index, 1)
        dispatch(deleteFromCart(basketProduct))
    }

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }


    return (
        <>
            <h1>basket</h1>
            <div className="row mb-5  row-cols-lg-2" >
                {basketProduct.length ?
                    basketProduct.map((item, index) =>
                        <BasketItem item={item} del={del} index={index} />
                    )
                    :
                    <h1>cart is empty</h1>
                }
            </div>
            <div className="footer" style={{ backgroundColor: 'gainsboro', width: 300 }}>
                <div className="footer__date" style={{ display: 'grid' }}>
                    <span>Total price: {totalprice}</span>
                    {address ?
                        <span>{address}</span>
                        :
                        <span className="add__address" onClick={openModal}>add address</span>}
                </div>

                <Button variant="primary" >pay</Button>
            </div>

        </>
    )
}