import React from 'react';
import { Text, View } from 'react-native';



/* Compoentes */
import {Avatar} from '../Avatar'
import { ButtonAdd } from '../ButtonAdd';

/* Estilo */
import {styles} from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

    <Avatar 
      urlImage="https://github.com/THIAGOMORGADO.png"
    />

      <View>
        <View style={styles.use}>
          <Text style={styles.greeting}>Ola</Text>


          <Text style={styles.username}>Thiago Morgado</Text>

         
        </View>
        <Text style={styles.messager}>Hoje e dia de vitoria</Text>
        
      </View>
     
    </View>
  )
}
