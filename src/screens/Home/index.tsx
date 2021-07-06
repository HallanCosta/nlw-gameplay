import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Backgroud';
import { Load } from '../../components/Load';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { 
  styles,
  Header
} from './styles';


export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleNavigateAppointmentDetails(guildSelected: AppointmentProps) {
    navigate('AppointmentDetails', { guildSelected });
  }

  function handleNavigateAppointmentCreate() {
    navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return(
    <Background>
      <Header>
        <Profile />
        <ButtonAdd 
          onPress={handleNavigateAppointmentCreate} 
        />
      </Header>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList 
            style={styles.matches}
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={() => handleNavigateAppointmentDetails(item)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 69 }}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
          />
        </>
      }
    </Background>
  );
}