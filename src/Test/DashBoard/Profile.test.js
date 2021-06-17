import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Profile from '../../component/DashBoard/Profile'
import { PROFILE_ACTIVE } from '../../Store/ActionType'
import { profileActive } from '../../Store/Action'


const middleware  = {}
const mockStore = configureStore(middleware)
const initialState = {}
const Store = mockStore(initialState)



// const propsData = [{
//     address:{
//         city: "kilcoole",
//         geolocation: {lat: "-37.3159", long: "81.1496"},
//         number: 7682,
//         street: "new road",
//         zipcode: "12926-3874",
//     },
//     email: "john@gmail.com",
//     id: 1,
//     name:{
//         firstname: "john",
//         lastname: "doe",
//     },
//     password: "m38rmF$",
//     phone: "1-570-236-7033",
//     username: "johnd"
// }]

test('Profile component snapshot test', ()=>{
    const {} = render(
        <Provider store={Store}>
            <Profile />
        </Provider>
    )
    // setTimeout(() => {
    //     const profileActive = ()=>({type:PROFILE_ACTIVE})
    //     Store.dispatch(profileActive)
    // }, 5000);

    // const dispatchHandler = ()=>{
    //     Store.dispatch(profileActive)
    // }
    
    const profile = renderer.create(
        <Provider store={Store}>
            <Profile  />
        </Provider>
    )
    // profile.getInstance.dispatchHandler()
    expect(profile.toJSON()).toMatchSnapshot()
})