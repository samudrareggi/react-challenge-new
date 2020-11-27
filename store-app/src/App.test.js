import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'
import { Home } from './pages'

describe('Testing Home Component', () => {
  test('should render spinner loading correctly when loading', () => {
    const { getByTestId } = render(<Provider store={store}><Home /></Provider>)
    const loading = getByTestId('spinner')
    expect(loading).toBeInTheDocument()
  })
})
