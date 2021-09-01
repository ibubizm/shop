import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector, useDispatch } from 'react-redux'
import { current_brand } from '../redux/reducers/actions'

export const BrandBar = () => {
    const dispatch = useDispatch()
    const { brands, brandId } = useSelector(({ ItemsReducer }) => ItemsReducer)

    const activeBrand = (id) => {
        dispatch(current_brand(id))
    }
    return (
        <ListGroup horizontal>
            <ListGroup.Item
                style={{ cursor: 'pointer' }}
                onClick={() => activeBrand(null)}
                className={brandId === null ? 'active' : ''}>
                all
            </ListGroup.Item>
            {brands.map((br =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    onClick={() => activeBrand(br.id)}
                    className={brandId === br.id ? 'active' : ''} key={`${br.id}_${Date.now().toString()}`}>
                    {br.name}
                </ListGroup.Item>))}
        </ListGroup>
    )
}