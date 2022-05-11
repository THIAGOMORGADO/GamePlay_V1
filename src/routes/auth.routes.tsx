import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/* pages */
import { Home } from '../screen/Home'
import { SignIn } from '../screen/SignIn'

import { AppointmentDetails } from '../screen/AppointmentDetails'
import { AppointmentCreate } from '../screen/AppointmentCreate'

/* Themes */

import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        },
        animationEnabled: false // aqui esta desativando a animaçao no ios
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}
