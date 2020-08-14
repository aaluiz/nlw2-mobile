import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import TeacherIten, { Teacher } from '../../components/TeacherIten';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage  from '@react-native-community/async-storage';


import api from '../../services/api';


const TeacherList: React.FC = () => {
  const [ isFilterVisible, setIsFilterVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  const [favorites, setFavorites] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersId);
      }
    });
  }


  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleSubmit () {

    loadFavorites();

    console.log({subject, week_day, time});
    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time        
      }
    });
    console.log(response);
    if(response){
      setTeachers(response.data)
    }
  }

  return (
    <View style={styles.container}>
        <PageHeader 
          title="Proffys Disponíveis" 
          headerRight={
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={20} color={'#FFF'} />
            </BorderlessButton>
          }>
          { isFilterVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
                value={subject}
                onChangeText={text => setSubject(text)}
              />
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#c1bccc"
                    value={week_day}
                    onChangeText={text => setWeek_day(text)}
                    />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horario</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual horário?"
                    placeholderTextColor="#c1bccc"
                    value={time}
                    onChangeText={text => setTime(text)}
                    />
                </View>
              </View>

              <RectButton 
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>

            </View>
          )}
        </PageHeader>
        <ScrollView 
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 24,
          }}
        >

          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherIten 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)}
              />
            ) 
          })}

        </ScrollView>

    </View>
  ) 
}

export default TeacherList;