import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from '../../component/Home/Home'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {
    product : ['bat', 'ball'],
    activeUserDetail : 'yuvaraj'
}
const Store = mockStore(initialState)

test('Home Component Testing',()=>{

    const {getByTestId} = render(
        <Provider store={Store}>
            <Home />
        </Provider>)


    expect(getByTestId('AppBar')).toBeTruthy()
    expect(getByTestId('Category')).toBeTruthy()
    expect(getByTestId('Product')).toBeTruthy()
    expect(getByTestId('navIcon')).toBeTruthy()
    expect(getByTestId('Login')).toBeTruthy()



    //snapshot
    const home = renderer.create(
        <Provider store={Store}>
            <Home />
        </Provider>
    ).toJSON()

    expect(home).toMatchSnapshot()
})


