import { fireEvent, render } from '@testing-library/react'
import AppBarComponent from '../../component/Home/AppBarComponent'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { LOGIN_ACTIVE, REGISTER_ACTIVE } from '../../Store/ActionType'

const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)

describe('Home-AppBar component test',()=>{
    test('Home-AppBar component snapshot test',()=>{
        const AppBar = renderer.create(
            <Provider store={Store}>
                <AppBarComponent />
            </Provider>
        ).toJSON()
        expect(AppBar).toMatchSnapshot()
    })

    test('Home-AppBar component Functional testing',()=>{
        const {getByTestId} = render(
            <Provider store={Store}>
                <AppBarComponent />
            </Provider>
        )

        //action
        const registerActive = ()=>({type: REGISTER_ACTIVE})
        const loginActive = () => ({type: LOGIN_ACTIVE})


        const registerBtn = getByTestId('register-btn')
        const loginBtn = getByTestId('login-btn')

        // fireEvent.click(registerBtn)     
        Store.dispatch(registerActive())
                                                      //either fireEvent or Store.dispatch can be use to dispatch an action
        fireEvent.click(loginBtn)
        // Store.dispatch(LOGIN_ACTIVE())


        //checking dispatch of action
        expect(Store.getActions()).toEqual([{type:REGISTER_ACTIVE},{type:LOGIN_ACTIVE}])


    })
})