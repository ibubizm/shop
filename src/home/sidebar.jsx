import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export const SideBar = () => {
    const { types } = useSelector(({ ItemsReducer }) => ItemsReducer)
    const [active, setActive] = useState(0)
    return (
        <ListGroup>
            {types.map((type, index) =>
                <ListGroup.Item
                    key={type.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive(index)}
                    className={active === index ? 'active' : ''}>
                    {type.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    )
}