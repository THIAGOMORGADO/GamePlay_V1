import React  from 'react';
import {
  View, 
  Text, 
  Image,
  

} from 'react-native';

/* libs / hoock  */
import {useNavigation} from '@react-navigation/native';

/* Estilos */
import { styles } from './styles';

/* Images */
import Illustration from '../../assets/illustration.png';

/* Components */
import {ButtonIcon} from '../../components/ButtonIcon';
import {Background} from '../../components/BackGround';

export function SignIn () {
  const navigation = useNavigation();

  /* Funçoes de açoes */

function handleSignIN() {
  navigation.navigate('Home')
}


  return (
  <Background>
    <View style={styles.Container}>
     
     <Image  
       source={Illustration} 
       style={styles.image}
       resizeMode="stretch"
     />
     <View style={styles.content}>
       <Text style={styles.title}>
         Conecte-se {`\n`} 
         e organize suas {`\n`}
         jogatina
       </Text>

       <Text style={styles.subtitle}>
         Crie grupos para jogar seu games {`\n`}
         favoritos com seu amigos
       </Text>

       <ButtonIcon 
         title="Entra com discord"
         
         onPress={handleSignIN}
       />

     </View>
   </View>
  </Background>  
    
  );
}

