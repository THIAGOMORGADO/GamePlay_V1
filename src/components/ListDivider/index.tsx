import React from 'react'
import { View, Text } from 'react-native'

/* Estilos */
import {styles} from './styles'


/* Tyes */

type Props = {
  isCentered?: boolean;
}


export function ListDivider({isCentered} : Props) {
  return (
    <View style={[
      styles.container,
      isCentered ? {
        marginVertical: 12,
      } : {
        marginTop: 2,
        marginBottom: 31
      }
    ]}/>
  )
}