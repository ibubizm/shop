import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const BrandBar = () => {
    const [active, setActive] = useState(0)
    const brands = useSelector(({ ItemsReducer }) => ItemsReducer.brands)

    const activeBrand = (id) => {
        setActive(id)
    }
    return (
        <ListGroup horizontal>
            <ListGroup.Item
                style={{ cursor: 'pointer' }}
                onClick={() => setActive(0)}
                className={active === 0 ? 'active' : ''}>
                all
            </ListGroup.Item>
            {brands.map((br =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    onClick={() => activeBrand(br.id)}
                    className={active === br.id ? 'active' : ''} key={`${br.id}_${Date.now().toString()}`}>
                    {br.name}
                </ListGroup.Item>))}
        </ListGroup>
    )
}