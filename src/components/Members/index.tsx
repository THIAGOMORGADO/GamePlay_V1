import React from 'react'
import { Text, View } from 'react-native'

/* Componente */
import { Avatar } from '../Avatar'

/* Estilos */
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type Props = {
  data: MemberProps
}

export function Members({ data }: Props) {
  const isOnline = data.status === 'online'
  const { on, primary } = theme.colors
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary
              }
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponivel' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}
