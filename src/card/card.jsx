
import './card.scss'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/const'
import { Image } from 'react-bootstrap'



export const Card = ({ item, onOpen, add }) => {
    const history = useHistory()

    const test = (id) => {
        history.push(PRODUCT_ROUTE + '/' + id)
    }

    return (
        <>
            <div className="card" style={{ width: '15rem', height: '20rem', display: 'flex', }}>
                <div className="card-img" onClick={() => onOpen(item)} >
                    <Image style={{ height: 200 }} src={'http://localhost:5000/' + item.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 style={{ cursor: 'pointer' }} onClick={() => test(item.id)} className="card-title">{item.name}</h5>
                    <p className="card-text" style={{ maxRow: 4 }}>{item.description}</p>
                    <div className="footer__card">
                        <span>{item.price} BYN</span>
                        <button onClick={() => add(item)} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div >
        </>
    )
}