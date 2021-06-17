import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)
test('',()=>{
    const {getByTestId} = render(
        <Provider store={Store}>
            <Home />
        </Provider>
    )
})