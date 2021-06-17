import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Category from '../../component/util/Category'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)


test('Category Snapshot', ()=>{
    const category = renderer.create(
        <Provider store={Store}>
            <Category />
        </Provider>
    ).toJSON()
    expect(category).toMatchSnapshot()
})