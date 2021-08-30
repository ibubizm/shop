
import './card.scss'
import { useHistory } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/const'
import Image from 'react-bootstrap/Image'
import { CardImg } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'



export const CardItem = ({ item, add }) => {
    const history = useHistory()

    const onItemPage = (id) => {
        history.push(PRODUCT_ROUTE + '/' + id)
    }

    return (
        <>
            <Card style={{ maxWidth: '15rem', display: 'flex' }}>
                <CardImg style={{ maxWidth: '12rem', margin: '0 auto' }} src={'http://localhost:5000/' + item.img} />
                <Card.Body variant="bottom">
                    <Card.Title style={{ cursor: 'pointer' }} onClick={() => onItemPage(item.id)} className="card-title">{item.name}</Card.Title>
                    <div className="footer__card">
                        <span>{item.price} BYN</span>
                        <button onClick={() => add(item)} className="btn btn-primary">Add</button>
                    </div>
                </Card.Body>
            </Card >
        </>
    )
}