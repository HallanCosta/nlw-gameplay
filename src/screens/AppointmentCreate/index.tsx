import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Backgroud';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';

import { Guilds } from '../Guilds';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Container,
  Label,
  Form,
  Select,
  Image,
  SelectBody,
  Field,
  FieldContent,
  Column,
  Divider,
  CaracteresLimit,
  KeyboardAvoidingView,
  Footer
} from './styles';


export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  
  const stubGuild: any = {};
  const [guild, setGuild] = useState<GuildProps>(stubGuild);

  const [day, setDay] = useState('');
  const [moth, setMoth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const { navigate } = useNavigation();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    if (!category) {
      Alert.alert('Ops!', 'Você esqueceu de selecionar uma categoria');
      return;
    }
    
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${moth} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigate('Home');
  }


  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <Container>
          <Header 
            title="Agendar Partida"
          />

          <Label
            style={{ 
              marginLeft: 24, 
              marginTop: 36, 
              marginBottom :18 
            }}
          >
            Categoria
          </Label>

          <CategorySelect 
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <Form>
            <RectButton onPress={handleOpenGuilds}>
              <Select>

                {
                  guild.icon 
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  : <Image /> 
                }

                <SelectBody>
                  <Label>
                    { guild.name ? guild.name : 'Selecione um servidor' }
                  </Label>
                </SelectBody>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </Select>
            </RectButton>
                
            <Field>
              <FieldContent>
                <Label style={{ marginBottom: 12 }}>
                  Dia e mês
                </Label>

                <Column>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  
                  <Divider>
                    /
                  </Divider>

                  <SmallInput 
                    maxLength={2}
                    onChangeText={setMoth}
                  />
                </Column>
              </FieldContent>

              <FieldContent>
                <Label style={{ marginBottom: 12 }}>
                  Hora e minuto
                </Label>

                <Column>
                  <SmallInput 
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  
                  <Divider>
                    :
                  </Divider>

                  <SmallInput 
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </Column>
              </FieldContent>
            </Field>

            <Field style={{ marginBottom: 1 }}>
              <Label>
                Descrição
              </Label>

              <CaracteresLimit>
                Max 100 caracteres
              </CaracteresLimit>
            </Field>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}    
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <Footer>
              <Button 
                title="Agendar"
                onPress={handleSave}
              />
            </Footer>
          </Form>
        </Container>

      <ModalView 
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds 
          handleGuildSelect={handleGuildSelect}
        />
      </ModalView>
    </KeyboardAvoidingView>
  );
}