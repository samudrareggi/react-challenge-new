import { render, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home } from './pages'
import store from './store'
import App from './App'

describe('Testing Home Component', () => {
  test('should render brand link correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    const brandLink = getByTestId('brand-link')
    expect(brandLink).toBeInTheDocument()
  })

  test('should render spinner loading correctly', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    )

    const loading = getByTestId('spinner')
    expect(loading).toBeInTheDocument()
    debug()
  })
})
