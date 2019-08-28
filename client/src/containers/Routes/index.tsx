import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../../pages/Home'

const Routes = () => (
  <React.Fragment>
    <Header />
    <Route path="/" exact component={Home} />
  </React.Fragment>
)

export default Routes
