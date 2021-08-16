import { Switch, Route, Redirect } from 'react-router-dom'
import { Nav } from './nav/nav'
import { Basket } from './basket/basket'
import { Home } from './home/home'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Registration } from './log/registration'
import { authRoutes, publicRoutes } from './route'
import { HOME_ROUTE } from './utils/const'
import { useDispatch, useSelector } from 'react-redux'
import { allItems, auth } from './redux/reducers/actions'
import { check } from './http/userApi'


function App() {
  const [items, setItems] = useState([])
  const [activeLink, setActiveLink] = useState(0)
  const isAuth = useSelector(({ UserReducer }) => UserReducer.auth)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   axios.get('http://localhost:3001/items')
  //     .then(({ data }) => dispatch(allItems(data)))
  //     // .then(({ data }) => setItems(data))
  //     .then(catigories())
  // }, [])

  useEffect(() => {
    check()
      .then(( data ) => {
        dispatch(auth(true))
      })
      .finally(() => setLoading(false))
  }, [])

  const catigories = (cat, index) => {
    if (cat) {
      axios.get(`http://localhost:3001/items?catigories=${cat}`)
        .then(({ data }) => setItems(data))
        .then(setActiveLink(index))

    }
    else {
      axios.get('http://localhost:3001/items')
        .then(({ data }) => setItems(data))
        .then(setActiveLink(index))
    }
  }


  return (
    <>
      <Nav catigor={catigories} activeLink={activeLink} />
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


{/* <div className="container mt-5">
  <Route path="/" exact >
    <Home items={items} />
  </Route>
  <Route path="/basket">
    <Basket />
  </Route>
  <Route path="/registration">
    <Registration />
  </Route>
</div> */}