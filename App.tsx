import React from 'react';
import {useFonts} from 'expo-font';
import { StatusBar } from 'react-native';

/* LIbs instaladas */
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading  from 'expo-app-loading';

/* Arquivo de Rotas puxando as screens */
import { Routes }  from './src/routes';

/* Componente */
import {Background} from './src/components/BackGround';


export default function App(){
  const [fontsLoading] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });
  if(!fontsLoading) {
    return <AppLoading />
  }

  return (
    <Background>
     <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
    <Routes />
    </Background>
      
  )
}