import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch, useSelector } from 'react-redux'
import { current_type } from '../redux/reducers/actions'


export const SideBar = () => {
    const dispatch = useDispatch()
    const { types, typeId } = useSelector(({ ItemsReducer }) => ItemsReducer)

    const dispatchType = (id) => {
        dispatch(current_type(id))
    }

    return (
        <ListGroup>
            <ListGroup.Item
                onClick={() => dispatchType(null)}
                className={typeId === null ? 'active' : ''}
                style={{ cursor: 'pointer' }}
            >
                all
            </ListGroup.Item>
            {types.map((type, index) =>
                <ListGroup.Item
                    key={type.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatchType(type.id)}
                    className={typeId === type.id ? 'active' : ''}>
                    {type.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    )
}