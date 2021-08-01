
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import './nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { totalCount, totalPrice } from '../redux/reducers/actions'



const navLinks = [
    {
        name: 'All',
        link: '/',
        catigory: ''
    },
    {
        name: 'Consoles',
        link: '/consoles',
        catigory: 'items'

    },
    {
        name: 'Games',
        link: '/games',
        catigory: 'games'
    }
]

export const Nav = ({ catigor, activeLink }) => {
    // const dispatch = useDispatch()

    const countItems = useSelector(({ ProductReducer }) => ProductReducer.count)
    const totalprice = useSelector(({ ProductReducer }) => ProductReducer.price)
    // dispatch(totalPrice(totalprice))

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link, index) =>
                            <li className="nav-item" key={`${index}_${Date.now().toString()}`}>
                                <Link
                                    onClick={() => catigor(link.catigory, index)}
                                    className={index === activeLink ? "nav-link active" : 'nav-link'}
                                    aria-current="page"
                                    to="/">
                                    {link.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="basket" style={{ position: 'relative' }}>
                        <Link className="basket__btn" to="/basket">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            <span className="count__item">{countItems}</span>
                            <span style={{ color: '#fff' }}>{totalprice}BYN</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}