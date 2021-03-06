import React, {ReactNode} from 'react';
import { Text, View } from 'react-native';


/* Libs graditete */
import {LinearGradient, LinearGradientProps} from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/* Estilos */
import {styles} from './styles';
import { theme } from '../../global/styles/theme';


/* Types */

type Props = {
  title: string;
  action?: ReactNode;
}


export function Header({title, action} : Props) {
  const {secondary100, secondary40, heading} = theme.colors;
  const navigation = useNavigation();
  /* Açao */
  function handleGoBack () {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>
        <Text style={styles.title}>{title}</Text>

        {
          action ? 
          <View>
            { action }
          </View>
          :
          <View style={{width: 24 }}/>
        }

      
    </LinearGradient>
  )
}