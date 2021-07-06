import React, { useState, useEffect } from 'react';
import { FlatList, Alert, Share, Platform } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { Background } from '../../components/Backgroud';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment';
import { Load } from '../../components/Load';

import BannerImg from '../../assets/banner.png';

import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  ImageBackground,
  BannerContent,
  Title,
  Subtitle,
  Footer
} from './styles';

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = { 
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert('Erro externo', 'Verifique as configurações do servidor!. Será que o widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild() {

    widget.instant_invite 
    ? Linking.openURL(widget.instant_invite)
    : Alert.alert('Ops!', 'Esse servidor é publico?');
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  const members = [
    {
      id: '1',
      username: 'Hállan',
      avatar_url: 'https://github.com/HallanCosta.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Hállex',
      avatar_url: 'https://github.com/HallexCosta.png',
      status: 'offline'
    }
  ];

  return(
    <Background>
      <Header 
        title="Detalhes"
        action={
          widget.instant_invite &&
          <BorderlessButton
            onPress={handleShareInvitation}
          >
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <BannerContent>
          <Title>
            { guildSelected.guild.name }
          </Title>

          <Subtitle>
            { guildSelected.description }
          </Subtitle>
        </BannerContent>
      </ImageBackground>

      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members.length || 0}`}
          />

          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentred />}
            style={styles.members}
          />
        </>
      }

      {
        widget.instant_invite &&
        <Footer>
          <ButtonIcon 
            title="Entrar na partida"
            onPress={handleOpenGuild}
          />
        </Footer>
      }
    </Background>
  );
}