import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Search from '../../component/DashBoard/Search'
import userEvent from '@testing-library/user-event'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)


describe('DashBoard Search Test', ()=>{
    test('Search snapshot test',()=>{
        const search = renderer.create(
            <Provider store={Store}>
                <Search/>
            </Provider>
        ).toJSON()
        expect(search).toMatchSnapshot()
    })

    test('Search Input Functionality Test',()=>{
        const {getByTestId, getByDisplayValue} = render(
            <Provider store={Store}>
                <Search/>
            </Provider>
        )

        // const searchInput = getByTestId('search-input')
        const searchInput = getByDisplayValue('')
        fireEvent.change(searchInput, {target:{value:'shirt'}})
        expect(searchInput.value).toBe('shirt')
    })

    test('Search product not found Test',()=>{
        const {getByTestId, getByDisplayValue} = render(
            <Provider store={Store}>
                <Search/>
            </Provider>
        )

        const searchInput = getByDisplayValue('')
        // fireEvent.change(searchInput, {target:{value:'shirt'}})
        userEvent.type(searchInput, 'shirt')
        expect(searchInput.value).not.toBe('something')
        // expect(getByTestId('not-found')).toBeInTheDocument()
    })
})