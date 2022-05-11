import React, {ReactNode} from 'react';



/* Libs instaladas */
import {LinearGradient} from 'expo-linear-gradient'



/* Estilos */
import {styles} from './styles';
import { theme } from '../../global/styles/theme';

/* types */
type Props = {
  children?: ReactNode;
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}