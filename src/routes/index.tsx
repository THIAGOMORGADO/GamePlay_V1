import React from 'react';

/* importando a Navegação */
import {NavigationContainer} from '@react-navigation/native'; 

/* Routas de navegação */
import {AuthRoutes} from './auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}