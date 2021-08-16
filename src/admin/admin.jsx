import { Button } from "react-bootstrap"
import { useState } from "react"
import { ModalType } from './typeModal'
import { ModalBrand } from './brandModal'
import { ModalProduct } from "./productModal"



export const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    const typeVis = () => {
        setTypeVisible(true)
    }

    const typeClose = () => {
        setTypeVisible(false)
    }

    return (
        <>
            <h1>Admin</h1>
            <div className="buttons d-flex flex-column">
                <Button onClick={typeVis} className="mb-3 p-2" variant="outline-primary">add type</Button>
                <Button onClick={() => setBrandVisible(true)} className="mb-3 p-2" variant="outline-primary" >add brand</Button>
                <Button onClick={() => setProductVisible(true)} className="mb-3 p-2" variant="outline-primary" >add product</Button>
            </div>
            <ModalType show={typeVisible} onHide={typeClose} />
            <ModalBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <ModalProduct show={productVisible} onHide={() => setProductVisible(false)} />
        </>
    )
}