import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native'

/* Estilos */
import { styles } from './styles'

/* Types */
type Props = RectButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}
