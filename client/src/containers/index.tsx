import * as React from "react"
import Routes from './Routes'
import { GlobalStyle } from '../global/global-style'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  )
}

export default App
