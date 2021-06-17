import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import Register from '../../component/Home/Register'
import {fireEvent, render} from '@testing-library/react'

const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {
    registerActive : true
}
const Store = mockStore(initialState)

test('Registration Component Testing',()=>{
    
    const {getByPlaceholderText} = render(
        <Provider store={Store}>
            <Register />
        </Provider>
    )

    const firstNameInput = getByPlaceholderText('First name')
    fireEvent.change(firstNameInput, {target:{value: 'Yuvaraj'}})
    expect(firstNameInput.value).toBe('Yuvaraj')

})


// test('Register SnapShot Test',()=>{

//     const register = renderer.create(
//         <Provider store={Store}>
//             <Register />
//         </Provider>
//     ).toJSON()

//     expect(register).toMatchSnapshot()
// })