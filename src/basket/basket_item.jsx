import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './basket.scss'
import { Link } from 'react-router-dom'

export const BasketItem = ({ item, del, index }) => {

    return (
        <Card key={`${Date.now().toString()}_${item.id}`} style={{ maxWidth: '15rem' }}>
            <Image variant="top" src={'http://localhost:5000/' + item.img} />
            <Card.Body>

                <Link style={{ color: 'black', textDecoration: 'none' }} to={"/product/" + item.id}>
                    <Card.Title>{item.name}</Card.Title>
                </Link>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <div className="basket__footer">
                    <div className="price">
                        {item.price}BYN
                    </div>
                    <div className="del">
                        <Button variant="danger" onClick={() => del(item, index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}