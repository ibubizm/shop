import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/const'
import { user, auth } from '../redux/reducers/actions'

import Navbar from 'react-bootstrap/Navbar'



export const Nav = () => {
    const { count, price } = useSelector(({ BasketReducer }) => BasketReducer)
    const isAuth = useSelector(({ UserReducer }) => UserReducer.auth)
    const authUser = useSelector(({ UserReducer }) => UserReducer.user)
    const dispatch = useDispatch()



    const logOff = () => {
        dispatch(auth(false))
        dispatch(user({}))
        localStorage.removeItem('token')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Navbar.Brand href={HOME_ROUTE}>
                            Home
                        </Navbar.Brand>
                    </ul>

                    {isAuth ?
                        <>
                            <div className="basket" style={{ position: 'relative' }}>
                                <Link className="basket__btn" to="/basket">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" className="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    <span className="count__item">{count}</span>
                                    <span style={{ color: '#fff' }}>{price}BYN</span>
                                </Link>

                            </div>
                            <Button onClick={logOff} style={{ color: '#fff', marginLeft: '20px' }} to="/registration">
                                log off
                            </Button>
                            <div className="">{authUser.email}</div>
                        </> :
                        <>

                            <Link style={{ color: '#fff', marginLeft: '20px' }} to={LOGIN_ROUTE}>
                                log in
                            </Link>
                        </>

                    }
                    {authUser.role === 'ADMIN' && <Link style={{ color: '#fff', marginLeft: '20px' }} to="/admin">
                        admin
                    </Link>}
                </div>
            </div>
        </nav>
    )
}