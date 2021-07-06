import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

import { 
  Container
} from './styles';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return(
    <LinearGradient
      style={{ flex: 1 }}
      colors={[ secondary80, secondary100 ]}
    >
      {children}
    </LinearGradient>
  );
}