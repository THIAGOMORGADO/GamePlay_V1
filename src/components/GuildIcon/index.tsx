import React from 'react';
import { Image } from 'react-native';


/* Estilos */
import { styles } from './styles';



export function GuildIcon() {
  const uri = 'https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png'


  return (
    <Image 
      source={{uri}}
      style={styles.Image}
      resizeMode="cover"
     />
  )
}