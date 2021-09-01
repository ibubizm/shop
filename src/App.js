import { Switch, Route } from 'react-router-dom'
import { Nav } from './nav/nav'
import { useState, useEffect, memo } from 'react'
import { authRoutes, publicRoutes } from './route'
import { useDispatch, useSelector } from 'react-redux'
import { auth, user, addToBasket } from './redux/reducers/actions'
import { check } from './http/userApi'
import { Spinner } from 'react-bootstrap'

import { fetchOneProduct } from './http/productApi'

import { fetchBasket } from './http/basketApi'

import { totalPrice, totalCount } from "./redux/reducers/actions"


function App() {
  const isAuth = useSelector(({ UserReducer }) => UserReducer.auth)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      check()
        .then((data) => {
          dispatch(auth(true))
          dispatch(user(data))
          fetchBasket(data.id)
            .then(({ item }) => item.forEach(i => {
              fetchOneProduct(i.productId)
                .then((data) => {
                  data = { ...data, itemId: i.id }
                  dispatch(addToBasket(data))
                  dispatch(totalCount())
                  dispatch(totalPrice())
                })
            }))
        })

        .finally(() => {
          setLoading(false)
        })
    } catch (e) {
      console.log(e)
    }
  }, [dispatch])


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

export default memo(App)