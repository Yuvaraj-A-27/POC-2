import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Search from '../../component/DashBoard/Search'
import userEvent from '@testing-library/user-event'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {
    product : [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
        category: "Women's clothing",
        description: "Your men perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 2,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 200,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    }
    ]
}
const Store = mockStore(initialState)


describe('DashBoard Search Test', ()=>{


    test('Search snapshot test',()=>{
        const search = renderer.create(
            <Provider store={Store}>
                <Search />
            </Provider>
        ).toJSON()
        expect(search).toMatchSnapshot()
    })





    test('Search Input Functionality Test',()=>{
        const {getByPlaceholderText} = render(
            <Provider store={Store}>
                <Search />
            </Provider>
        )

        const searchInput = getByPlaceholderText('Search for Product')
        fireEvent.change(searchInput, {target:{value:'shirt'}})
        expect(searchInput.value).toBe('shirt')
    })




    test('Searcg Result Testing', ()=>{
        const {getByPlaceholderText, getByTestId} = render(
            <Provider store={Store}>
                <Search />
            </Provider>
        )
        
        const search = getByPlaceholderText('Search for Product')
        userEvent.type(search, "men")
        expect(getByTestId('productCard')).toBeInTheDocument()
    })
})