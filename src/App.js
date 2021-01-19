import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

//Redux Stuff
import { Provider } from 'react-redux'
import store from './store'


import Landing from './components/Pages/Landing/Landing'
import ProductDetail from './components/Pages/Products/ProductDetail'
import Products from './components/Pages/Products/Products'
import Category from './components/Pages/Category/Category'
import Auth from './components/Pages/Auth/Auth'
import About from './components/Pages/About/About'
import ContactUs from './components/Pages/ContactUs/ContactUs'
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy'
import Cart from './components/Pages/Shop/Cart/Cart'
import PrivateRoute from './components/Routing/PrivateRoute'
import Customer from './components/Pages/Customer/Customer'

import NotFound from './components/Layout/Errors/NotFound'
import Alert from './components/Layout/Alert/Alert'
import setAuthTOken from './utils/setAuthToken'

//actions
import { loadUser } from './actions/auth'

if(localStorage.token){
  setAuthTOken(localStorage.token)
}

const App  = () => {
  useEffect(() => {
    store.dispatch(loadUser(), [])//add empty array to run it once, this make it componentDidMount
  })
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/privacy-policy/:mobile?" component={PrivacyPolicy} />
            <Route exact path="/stores" component={ContactUs} />
            <Route exact path="/faq" component={ContactUs} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/products/" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/category/:slug" component={Category} />
            <Route exact path="/brand/:slug" component={Products} />

            <PrivateRoute exact path="/customer/:tab?" component={Customer} />
            
            <Route path='/' component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
