import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Content,
  Alignment,
  Title,
  Type
} from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({
  data,
  ...rest
}: Props) {
  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <Content>
        <Alignment>
          <Title>
            {data.name}
          </Title>

          <Type>
            { data.owner ? 'Administrador' : 'Convidado' }
          </Type>
        </Alignment>
      </Content>

      <Feather 
        name="chevron-right"
        size={24}
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  );
}