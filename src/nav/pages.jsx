import Pagination from 'react-bootstrap/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { current_page } from '../redux/reducers/actions'

export const Pages = () => {
    const { currentPage, count, limitOnPage } = useSelector(({ ItemsReducer }) => ItemsReducer)
    const pageCount = Math.ceil(count / limitOnPage)
    const pages = []

    const dispatch = useDispatch()

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const next = () => {
        const nextPage = currentPage + 1
        if (nextPage <= pageCount) {
            dispatch(current_page(nextPage))
        }
    }

    const prev = () => {
        const prevPage = currentPage - 1
        if (prevPage >= 1) {
            dispatch(current_page(prevPage))
        }
    }

    return (
        <Pagination className="mt-5" style={{ justifyContent: 'center' }}>
            <Pagination.Prev onClick={prev} />
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    onClick={() => dispatch(current_page(page))}
                    active={page === currentPage}
                >
                    {page}
                </Pagination.Item>)}
            <Pagination.Next onClick={next} />
        </Pagination>
    )
}