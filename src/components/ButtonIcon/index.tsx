import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';

import { 
  IconWrapper,
  Discord,
  Title
} from './styles';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ 
  title, 
  ...rest
}: Props) {
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <IconWrapper style={{ borderRightWidth: 1 }}>
        <Discord source={DiscordImg} />
      </IconWrapper>

      <Title>
        {title}
      </Title>
    </RectButton>
  );
}