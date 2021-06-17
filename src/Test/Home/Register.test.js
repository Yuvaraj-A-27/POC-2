import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import Register from '../../component/Home/Register'

const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)


test('Register SnapShot Test',()=>{

    const register = renderer.create(
        <Provider store={Store}>
            <Register />
        </Provider>
    ).toJSON()

    expect(register).toMatchSnapshot()
})