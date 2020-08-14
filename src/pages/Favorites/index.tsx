import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import TeacherIten, { Teacher } from '../../components/TeacherIten';
import AsyncStorage  from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';


import styles from './styles';
import PageHeader from '../../components/PageHeader';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  }, [])


  return <View style={styles.container}>
    <PageHeader title="Meus Proffys Favoritos" />
    <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 24,
          }}
        >
          {favorites.map((teacher: Teacher) => {
            return (
              <TeacherIten 
                key={teacher.id} 
                teacher={teacher} 
                favorited
              />
            ) 
          })}
      </ScrollView>
  </View>;
}

export default Favorites;