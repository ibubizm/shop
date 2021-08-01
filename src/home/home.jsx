import { Card } from '../card/card'
import { useState } from 'react'
import { ModalCard } from '../card/modalCard'
import { Slider } from './slider'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/reducers/actions'
import { totalPrice, totalCount } from "../redux/reducers/actions"


export const Home = ({ items }) => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()
    const dispatch = useDispatch()
    const basketProduct = useSelector(({ ProductReducer }) => ProductReducer.items)
    const totalprice = useSelector(({ ProductReducer }) => ProductReducer.price)
    const price = basketProduct.reduce((sum, obj) => Number(obj.price) + sum, 0)




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
            <div className="row">
                {items.map((item, index) =>
                    <div className="col" key={`${index}_${Date.now().toString()}`}>
                        <Card
                            item={item}
                            onOpen={openModal}
                            add={add}
                        />
                    </div>
                )}
                {visible &&
                    <ModalCard item={activeItem} onOpen={openModal} onClose={closeModal} />
                }
            </div>
        </div>
    )
}