import { GlobalStyles } from './styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
