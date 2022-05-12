import React from 'react'
import { FlatList, View } from 'react-native'

/* Componetes */
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
/* Estilos */
import { styles } from './styles'

export function Guilds() {
  const guilds = [
    {
      id: '1',
      name: 'Lendarios',
      icon: null,
      owner: true
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Guild data={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  )
}
