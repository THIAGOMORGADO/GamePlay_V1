import React from 'react'
import { FlatList, View } from 'react-native'


/* Componetes */
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { GuildProps } from '../../components/Guild'


/* Estilos */
import { styles } from './styles'

/* types */
type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect} : Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendarios',
      icon: 'null',
      owner: true
    },
    {
      id: '2',
      name: 'Duelo 1 X 1',
      icon: 'null',
      owner: true
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom: 6, paddingTop: 103}}
        ListHeaderComponent={() => <ListDivider  isCentered /> }
        style={styles.guilds}
      />
    </View>
  )
}
