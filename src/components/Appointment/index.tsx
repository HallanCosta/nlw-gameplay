import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

import { GuildProps } from '../Guild';

import { 
  styles,
  Container,
  Content,
  Header,
  Title,
  Category,
  Footer,
  DateInfo,
  Date,
  PlayersInfo,
  Player,
} from './styles';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({
  data,
  ...rest
}: Props) {
  const [category] = categories.filter(item => item.id == data.category);

  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return(
    <RectButton {...rest}>
      <Container>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} /> 
        </LinearGradient>

        <Content>
          <Header>
            <Title>
              {data.guild.name}
            </Title>

            <Category>
              { category.title }
            </Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />

              <Date>
                { data.date }
              </Date>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={ owner ? primary : on } />

              <Player owner={owner}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Player>
            </PlayersInfo>
          </Footer>
          
        </Content>
      </Container>
    </RectButton>
  );
}