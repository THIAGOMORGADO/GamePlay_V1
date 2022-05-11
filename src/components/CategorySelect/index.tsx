import React from 'react';
import { ScrollView } from 'react-native';


/* Estilo */
import {styles} from './styles';

/* Componente CategorySelect */
import {Category} from '../Category'
import {categories} from '../../Utils/categories';

/* Types */
type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({
  categorySelected, 
  setCategory, 
  hasCheckBox = false
}:Props) {
  return (
    <ScrollView 
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hashCheckBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>
     
  )
}