import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, getByDisplayValue, getByPlaceholderText, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Login from '../../component/Home/Login'
import AppBarComponent from '../../component/Home/AppBarComponent'
import { LOGIN_ACTIVE } from '../../Store/ActionType'
import ReactDOM from 'react-dom'


const middleware  = {}
const mockStore = configureStore(middleware)

const initialState = {
    loginActive : true
}
const Store = mockStore(initialState)


describe('Login Component Test', ()=>{

    test('Login Functionality Test',()=>{


        const {getByTestId, getByPlaceholderText} = render(
            <Provider store={Store}>
                <Login />
            </Provider>
        )

        const loginActive = () => ({type: LOGIN_ACTIVE})
        Store.dispatch(loginActive())
        expect(Store.getActions()).toEqual([{type:LOGIN_ACTIVE}])

        
        const div = getByTestId('login-div')
        expect(div).toBeInTheDocument()

        const username = getByPlaceholderText('User Name')
        fireEvent.change(username,{target:{value:'Yuvaraj'}})
        expect(username.value).toBe('Yuvaraj')

        const password = getByPlaceholderText('password')
        fireEvent.change(password,{target:{value:'Yuvaraj'}})
        expect(password.value).toBe('Yuvaraj')

    })




    // test('Login Component snapShot test', ()=>{
    //     const login = renderer.create(
    //         <Provider store={Store}>
    //             <Login />
    //         </Provider>
    //     ).toJSON()
    //     expect(login).toMatchSnapshot()
    // })

    // beforeAll(() => {
    //     ReactDOM.createPortal = jest.fn((element, node) => {
    //       return element
    //     })
    //   })
    
    //   afterEach(() => {
    //     ReactDOM.createPortal.mockClear()
    //   })

})