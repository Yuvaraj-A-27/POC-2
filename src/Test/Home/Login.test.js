import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Login from '../../component/Home/Login'
import AppBarComponent from '../../component/Home/AppBarComponent'
import { LOGIN_ACTIVE } from '../../Store/ActionType'


const middleware  = {}
const mockStore = configureStore(middleware)

const initialState = {}
const Store = mockStore(initialState)


describe('Login Component Test', ()=>{

    test('Login Functionality Test',()=>{

        const {getByTestId} = render(
            <Provider store={Store}>
                <AppBarComponent />
                <Login />
            </Provider>
        )

        const loginActive = () => ({type: LOGIN_ACTIVE})
        Store.dispatch(loginActive())
        expect(Store.getActions()).toEqual([{type:LOGIN_ACTIVE}])

        const login = renderer.create(
            <Provider store={Store}>
                {/* <AppBarComponent/> */}
                <Login />
            </Provider>
        ).toJSON()
        expect(login).toMatchSnapshot()

        
        // const username = getByTestId('login-username')
        // fireEvent.change(username,{target:{value:'Yuvaraj'}})
        // expect(username.value).toBe('Yuvaraj')
    })

    test('Login Component snapShot test', ()=>{
        const login = renderer.create(
            <Provider store={Store}>
                {/* <AppBarComponent/> */}
                <Login />
            </Provider>
        ).toJSON()
        expect(login).toMatchSnapshot()
    })

})