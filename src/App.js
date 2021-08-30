import { Switch, Route, Redirect } from 'react-router-dom'
import { Nav } from './nav/nav'
import { useState, useEffect } from 'react'
import { authRoutes, publicRoutes } from './route'
import { HOME_ROUTE, PRODUCT_ROUTE } from './utils/const'
import { useDispatch, useSelector } from 'react-redux'
import { allItems, auth, user, type, brand, addToBasket } from './redux/reducers/actions'
import { check } from './http/userApi'
import { Spinner } from 'react-bootstrap'

import { fetchOneProduct, fetchProduct } from './http/productApi'
import { fetchBrand } from './http/brandApi'
import { fetchType } from './http/typeApi'
import { fetchBasket } from './http/basketApi'

import { totalPrice, totalCount } from "./redux/reducers/actions"
import { ItemPage } from './card/itemPage'




function App() {
  const isAuth = useSelector(({ UserReducer }) => UserReducer.auth)
  const { brandId, typeId } = useSelector(({ ItemsReducer }) => ItemsReducer)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const { items } = useSelector(({ BasketReducer }) => BasketReducer)

  const authUser = useSelector(({ UserReducer }) => UserReducer.user)


  useEffect(() => {
    try {
      fetchType()
        .then(data => dispatch(type(data)))
      fetchBrand()
        .then(data => dispatch(brand(data)))
      fetchProduct(brandId, typeId)
        .then(({ rows }) => dispatch(allItems(rows)))
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