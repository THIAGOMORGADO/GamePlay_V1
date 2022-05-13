import React, { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'

/* Estilos */
import { styles } from './styles'

/* Componentes */
import { Background } from '../BackGround'

/* type */
type Props = ModalProps & {
  children: ReactNode
}

export function ModalView({ children, ...rest }: Props) {
  return(
  <Modal 
    transparent 
    animationType="slide" 
    {...rest}
  >
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Background>
          <View style={styles.bar} />
          {children}
        </Background>
      </View>
    </View>
  </Modal>
  )

}
