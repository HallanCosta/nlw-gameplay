import React from 'react';

import DiscordSvg from '../../assets/discord.svg';

import {
  Container, 
  Image
} from './styles';

type Props = {
  guildId: string;
  iconId: string | null;
}

const { CDN_IMAGE } = process.env;

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  
  //'https://i.pinimg.com/originals/a0/b4/b7/a0b4b72f50ca162bd86ff2f6df016a69.jpg';

  return (
    <Container>
      {
        iconId ? 
        <Image 
          source={{ uri }}
          resizeMode="cover"
        />
        :
        <DiscordSvg
          width={40}
          height={40}
        />
      }
    </Container>
  );
}