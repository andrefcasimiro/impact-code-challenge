import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers'
import client from './global/graphql/config'
import { Provider } from 'react-redux'
import { store, persistor } from './global/store'
import { PersistGate } from 'redux-persist/es/integration/react'
// @ts-ignore
import FontFaceObserver from 'fontfaceobserver'
import appConfig from './global/app/config'
import './assets/fonts/index.css'

const fontObserver = new FontFaceObserver(appConfig.defaultFont, {})

fontObserver.load()
  .then(() => {
    const body = document.body
    body && body.classList.add('fontLoaded')
  })
  .catch((event: { message: string }) => console.log(event.message))


const element = document.getElementById('root')

if (element) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </PersistGate>
    </ApolloProvider>,
    element,
  )
}
