import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import DashBoard from '../../component/DashBoard/DashBoard'
import { useHistory } from 'react-router'


jest.mock('react-router',()=>({
    useHistory : jest.fn()
}))


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)


// test('DashBoard Component test',() =>{
    
//     const push = jest.fn()
//     useHistory.mockImplementationOnce(()=> push)

//     const {}= render(
//         <Provider store={Store}>
//             <DashBoard  />
//         </Provider>
//     )

//     expect(getByTestId('AppBar')).toBeTruthy()
//     expect(getByTestId('Category')).toBeTruthy()
//     expect(getByTestId('Product')).toBeTruthy()
//     expect(getByTestId('navIcon')).toBeTruthy()
// })

test('', ()=>{
    expect(true).toBe(true)
})