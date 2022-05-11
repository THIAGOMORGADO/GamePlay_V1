import React from 'react';
import { View, Text } from 'react-native';
import {SvgProps} from 'react-native-svg'

/* Libs LinearGradient */
import {LinearGradient} from 'expo-linear-gradient'

/* Lib Gesture Handle */
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

/* Estilos */
import { styles } from './styles';
import { theme } from '../../global/styles/theme';




/* Types */
type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked: boolean;
  hashCheckBox?: boolean;
}

export function Category({
  title, 
  icon:Icon, 
  checked = false,
  hashCheckBox = false,
  ...rest} : Props) {
  const {secondary40, secondary50, secondary70, secondary75} = theme.colors;
  return (
    <RectButton {...rest}>
    <LinearGradient 
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
      <LinearGradient style={[styles.content, {opacity: checked ? 1 : 0.5}]}
       colors={[checked ? secondary75 : secondary50, secondary40]}
      >
        {
          hashCheckBox &&
          <View style={
            checked ? styles.checked : styles.check
          } />
        }
        
          
       
        <Icon width={48} height={48} />
        <Text style={styles.title}>
            {title}
        </Text>
      </LinearGradient>
    </LinearGradient>
    </RectButton>
  )
}