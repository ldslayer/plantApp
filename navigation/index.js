import React from 'react'
import { Image } from 'react-native'

import { createAppContainer, createStackNavigator } from 'react-navigation'

import Welcome from '../screens/Welcome'
// import Login from '../screens/Login'
// import Browse from '../screens/Browse'
// import Explore from '../screens/Explore'
// import Forgot from '../screens/Forgot'
// import Product from '../screens/Product'
// import Settings from '../screens/Settings'
// import Signup from '../screens/Signup'

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    // Login,
    // Browse,
    // Explore,
    // Forgot,
    // Product,
    // Settings,
    // Signup,
}, {
        defaultNavigationOptions: {
            headerStyle: {},
            headerBackImage: <Image />,
            heaerBackTitle: null,
            headerLeftContainerStyle: {},
            headerRightContainerStyle: {},
        }
    })

export default createAppContainer(screens)