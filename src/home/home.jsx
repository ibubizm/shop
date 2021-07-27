import { Card } from '../card/card'
import { useState } from 'react'
import { ModalCard } from '../card/modalCard'
import { Slider } from './slider'


export const Home = ({ items }) => {
    const [visible, setVisible] = useState(false)
    const [activeItem, setActiveItem] = useState()

    const openModal = (item) => {
        setVisible(true)
        setActiveItem(item)
    }

    const closeModal = () => {
        setVisible(false)
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