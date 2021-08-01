import { Switch, Route } from 'react-router-dom'
import { Nav } from './nav/nav'
import { Basket } from './basket/basket'
import { Home } from './home/home'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [items, setItems] = useState([])
  const [activeLink, setActiveLink] = useState(0)


  useEffect(() => {
    axios.get('http://localhost:3001/items')
      .then(({ data }) => setItems(data))
      .then(catigories())
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
          <Route path="/" exact >
            <Home items={items} />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </div>
      </Switch>
    </>
  );
}

export default App;
