import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../../pages/Home'
import DetailView from '../../components/DetailView'

const Routes = () => (
  <React.Fragment>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/beer/:id" exact component={DetailView} />
  </React.Fragment>
)

export default Routes
