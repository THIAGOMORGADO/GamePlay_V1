import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';


/* Lib gesture-handler */
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

/* Estilos */
import {styles} from './styles';
import {theme} from '../../global/styles/theme';

/* Types */
type Props = RectButtonProps;

export function ButtonAdd({...rest} : Props) {
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons 
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}