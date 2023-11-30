import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import store from './store.js'
import App from './App.jsx'

const colors = {
  brand: {
    mainBlue: '#000090',
    lightBlue: '#7070FF',
    whiteBlue: '#EBEBFF',
    orange: '#F17300',
    white: '#F5F5F5',
    offWhite: '#D9E5D6',
    red: '#A8201A',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
