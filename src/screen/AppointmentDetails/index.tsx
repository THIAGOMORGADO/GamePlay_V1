import React from 'react'

import { ImageBackground, Text, View, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import Illustration from '../../assets/banner.png'

/* Componentes */
import { Background } from '../../components/BackGround'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Members } from '../../components/Members'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

/* Estilos */
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function AppointmentDetails() {
  const { primary } = theme.colors
  const members = [
    {
      id: '1',
      username: 'Thiago',
      avatar_url: 'https://github.com/THIAGOMORGADO.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'morgado',
      avatar_url: 'https://github.com/THIAGOMORGADO.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Fernando',
      avatar_url: 'https://github.com/THIAGOMORGADO.png',
      status: 'online'
    }
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <MaterialIcons name="share" size={24} color={primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={Illustration} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>lendarios</Text>
          <Text style={styles.subtitle}>
            E hoje vamos chegar ao challerfer sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Members data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entra na partida..." />
      </View>
    </Background>
  )
}
