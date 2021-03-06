import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text
} from 'react-native'
import { Feather } from '@expo/vector-icons'

/* Componentes */
import { GuildIcon } from '../GuildIcon'

/* Estilos */
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

/* Types  */
type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? 'Convidado' : 'Administrador'}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  )
}
