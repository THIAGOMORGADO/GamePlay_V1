import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* Estilos */
import { styles } from './styles'

/* Componente */
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/BackGround'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  /* Açao */
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/05 as 17:31h',
      description: 'lorem ipsum dolor sit amet, consectetur'
    },
    {
      id: '2',
      guild: {
        id: '2',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/05 as 17:31h',
      description: 'lorem ipsum dolor sit amet, consectetur'
    }
  ]

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}
