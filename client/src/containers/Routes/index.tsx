import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Home from '../../pages/Home'

const Routes = () => (
  <React.Fragment>
    <Header />
    <Navbar />
    <Route path="/" exact component={Home} />
  </React.Fragment>
)

export default Routes
