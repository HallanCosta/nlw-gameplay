import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Backgroud';

import { theme } from '../../global/styles/theme';

import { 
  styles,
  Title,
  Action
} from './styles';

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: Props) {
  const { secondary40, secondary100, heading } = theme.colors;

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return(
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Title>
        {title}
      </Title>

      {
        action 
        ?
        <Action>
          {action}
        </Action>
        :
        <Action style={{ width: 24 }} />
      }
    </LinearGradient>
  );
}