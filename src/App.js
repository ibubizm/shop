import { Switch, Route, Redirect } from 'react-router-dom'
import { Nav } from './nav/nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { authRoutes, publicRoutes } from './route'
import { HOME_ROUTE } from './utils/const'
import { useDispatch, useSelector } from 'react-redux'
import { allItems, auth, user, type, brand } from './redux/reducers/actions'
import { check } from './http/userApi'
import { Spinner } from 'react-bootstrap'

// import { allItems, brand, type } from './redux/reducers/actions'

import { fetchProduct } from './http/productApi'
import { fetchBrand } from './http/brandApi'
import { fetchType } from './http/typeApi'
import { fetchBasket } from './http/basketApi'


function App() {
  const [items, setItems] = useState([])
  const [activeLink, setActiveLink] = useState(0)
  const isAuth = useSelector(({ UserReducer }) => UserReducer.auth)
  const userId = useSelector(({ UserReducer }) => UserReducer.user.id)
  const { brandId, typeId } = useSelector(({ ItemsReducer }) => ItemsReducer)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    fetchType()
      .then(data => dispatch(type(data)))
    fetchBrand()
      .then(data => dispatch(brand(data)))
    fetchProduct(brandId, typeId)
      .then(({ rows }) => dispatch(allItems(rows)))
      .then(() => fetchBasket(userId)
        .then(({ item }) => console.log(item)))
    check()
      .then((data) => {
        dispatch(auth(true))
        dispatch(user(data))
      })

    fetchBasket(userId)
      .then(({ item }) => console.log(item))

      .finally(() => setLoading(false))
  }, [brandId, typeId])

  if (loading) {
    return (
      <Spinner animation="border" role="status" />
    )
  }


  return (
    <>
      <Nav />
      <Switch>
        <div className="container mt-5">
          {isAuth && authRoutes.map(({ path, Component }) =>
            <Route key={path} component={Component} path={path} exact />
          )}
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} component={Component} path={path} exact />
          )}
          {/* <Redirect to={HOME_ROUTE} /> */}
        </div>

      </Switch>
    </>
  );
}

export default App;